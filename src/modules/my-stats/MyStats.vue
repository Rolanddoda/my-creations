<template>
  <div class="my-stats">
    <main>
      <div class="slider">
        <div class="slider__image--wrapper">
          <img
            class="slider__image slider__image--1"
            src="https://scontent.ftia5-1.fna.fbcdn.net/v/t1.0-9/s960x960/61880444_2641088789252229_4457837949127491584_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=5AneHXZ7pokAX-5UkNc&_nc_ht=scontent.ftia5-1.fna&tp=7&oh=f3eaee6ee589e8439731be2e96f201af&oe=5FA7A577"
            alt="image 01"
          />
        </div>
      </div>
    </main>

    <svg
      class="cursor cursor--large"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <circle class="cursor__inner" cx="30" cy="30" r="20" />
    </svg>
    <svg
      class="cursor cursor--small"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <circle class="cursor__inner" cx="30" cy="30" r="5" />
    </svg>
    <svg
      class="cursor cursor--close"
      width="40"
      height="40"
      viewBox="0 0 512 512"
    >
      <line x1="368" y1="368" x2="144" y2="144" />
      <line x1="368" y1="144" x2="144" y2="368" />
    </svg>

    <!-- //////// SHADER CODE //////// -->

    <script id="vertexShader" type="x-shader/x-vertex">
      precision mediump float;

      varying vec2 vUv;
      varying float vWave;

      uniform float uTime;
      uniform float uAmplitude;
      uniform float uProgDirection;
      uniform float uMouseOverAmp;
      uniform float uRadius;

      uniform vec2 uMeshSize;
      uniform vec2 uMousePos;

      uniform bool uAnimating;
      uniform bool uTranslating;

      float mapVal(in float n,in float start1,in float stop1,in float start2,in float stop2){
        return((n-start1)/(stop1-start1))*(stop2-start2)+start2;
      }

      void main(){
        vec3 pos=position;
        vUv=uv;

        vec2 center=vUv-uMousePos;
        center.x*=uMeshSize.x/uMeshSize.y;
        float dist=length(center);

        float radius=uRadius;

        float mask=smoothstep(radius,radius*5.,dist);
        float d=mapVal(mask,-1.,1.,-1.,0.);

        if(uAnimating){
          pos.z=sin(pos.x*5.+uTime*10.*uProgDirection)*uAmplitude;
          pos.z*=2.5;
        }else{
          pos.z=d*uMouseOverAmp;
          pos.z*=15.;
        }

        if(uTranslating){
          pos.z=sin(pos.y*6.+uTime*10.)*uAmplitude;
          pos.z*=3.5;
        }

        vWave=pos.z;

        gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
      }
    </script>

    <script id="fragmentShader" type="x-shader/x-fragment">
      precision mediump float;

      varying vec2 vUv;
      varying float vWave;

      uniform float uTime;
      uniform float uProg;
      uniform float uProgDirection;

      uniform sampler2D uCurrTex;
      uniform sampler2D uNextTex;

      uniform vec2 uMeshSize;
      uniform vec2 uImageSize;

      vec2 backgroundCoverUv(vec2 uv,vec2 canvasSize,vec2 textureSize){
        vec2 ratio=vec2(
        min((canvasSize.x/canvasSize.y)/(textureSize.x/textureSize.y),1.),
        min((canvasSize.y/canvasSize.x)/(textureSize.y/textureSize.x),1.)
        );

        vec2 uvWithRatio=uv*ratio;

        return vec2(
        uvWithRatio.x+(1.-ratio.x)*.5,
        uvWithRatio.y+(1.-ratio.y)*.5
        );
      }

      void main(){
        vec2 texUv=backgroundCoverUv(vUv,uMeshSize,uImageSize);

        float x=uProg;
        float y;
        if(uProgDirection==1.)y=(x*2.+(vUv.x-1.));
        else y=((x*2.)-vUv.x);
        x=smoothstep(0.,1.,y);

        float r1=texture2D(uCurrTex,texUv*.04).r;
        float g1=texture2D(uCurrTex,texUv*.01).g;
        float b1=texture2D(uCurrTex,texUv*-.03).b;
        vec3 tex1=vec3(r1,g1,b1);

        float r2=texture2D(uNextTex,texUv*.04).r;
        float g2=texture2D(uNextTex,texUv*.01).g;
        float b2=texture2D(uNextTex,texUv*-.03).b;
        vec3 tex2=vec3(r2,g2,b2);

        float scaleUp=(.4+.6*(1.-uProg));
        float scaleDown=(.6+.4*uProg);

        vec4 f1=mix(
        texture2D(uCurrTex,texUv*(1.-x)*scaleUp+vec2(.15)*uProg),
        texture2D(uNextTex,texUv*x*scaleDown),
        x);

        vec3 f2=mix(tex1,tex2,x);

        vec4 final=mix(f1,vec4(f2,1.),.12);

        gl_FragColor=final;
      }
    </script>
  </div>
</template>

<script>
import gsap from "gsap";
import { Mouse } from "./webGl/Mouse";
import { GlSlider } from "./webGl/GlSlider";

export default {
  mounted() {
    // -------- UTILITY FUNCTIONS & CLASSES [START] --------

    const lerp = (a, b, n) => (1 - n) * a + n * b;

    // -------- UTILITY FUNCTIONS & CLASSES [END] --------

    // -------- MAIN CLASSES [START] --------

    let mouse = new Mouse();

    class Cursor {
      constructor(el) {
        this.DOM = { el: el };
        this.DOM.el.style.opacity = 0;

        this.bounds = this.DOM.el.getBoundingClientRect();

        this.renderedStyles = {
          tx: { previous: 0, current: 0, amt: 0.2 },
          ty: { previous: 0, current: 0, amt: 0.2 },
          scale: { previous: 0, current: 1, amt: 0.2 },
          opacity: { previous: 0, current: 1, amt: 0.15 }
        };
      }

      init() {
        this.onMouseMoveEv = () => {
          this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
            mouse.position.x - this.bounds.width / 2;
          this.renderedStyles.ty.previous = this.renderedStyles.ty.previous =
            mouse.position.y - this.bounds.height / 2;
          requestAnimationFrame(() => this.render());
          window.removeEventListener("mousemove", this.onMouseMoveEv);
        };
        window.addEventListener("mousemove", this.onMouseMoveEv);
      }

      setTranslateLerpAmount(amount) {
        this.renderedStyles["tx"].amt = amount;
        this.renderedStyles["ty"].amt = amount;
        return this;
      }
      scale(amount = 1) {
        this.renderedStyles["scale"].current = amount;
        return this;
      }
      opaque(amount = 1) {
        this.renderedStyles["opacity"].current = amount;
        return this;
      }
      render() {
        this.renderedStyles["tx"].current =
          mouse.position.x - this.bounds.width / 2;
        this.renderedStyles["ty"].current =
          mouse.position.y - this.bounds.height / 2;

        for (const key in this.renderedStyles) {
          this.renderedStyles[key].previous = lerp(
            this.renderedStyles[key].previous,
            this.renderedStyles[key].current,
            this.renderedStyles[key].amt
          );
        }

        gsap.set(this.DOM.el, {
          translateX: this.renderedStyles["tx"].previous,
          translateY: this.renderedStyles["ty"].previous,
          scale: this.renderedStyles["scale"].previous,
          opacity: this.renderedStyles["opacity"].previous
        });

        requestAnimationFrame(() => this.render());
      }
    }

    class Cursors {
      constructor() {
        this.DOM = {};

        this.DOM.cursorEls = {
          large: document.querySelector(".cursor--large"),
          small: document.querySelector(".cursor--small"),
          close: document.querySelector(".cursor--close")
        };

        this.cursors = {
          large: new Cursor(this.DOM.cursorEls.large),
          small: new Cursor(this.DOM.cursorEls.small),
          close: new Cursor(this.DOM.cursorEls.close)
        };

        this.cursors.small.setTranslateLerpAmount(0.85);
        this.cursors.close
          .opaque(0)
          .scale(0.5)
          .setTranslateLerpAmount(0.5);
      }

      init() {
        Object.values(this.cursors).forEach(cursor => {
          cursor.init();
        });
        this.initEvents();
      }

      initEvents() {
        this.initEventsOnImage();
      }

      initEventsOnImage() {
        const imageWrapper = document.querySelector(".slider__image--wrapper");

        const onMouseDown = () => {
          this.cursors.large.scale(2).opaque(0);
          this.cursors.small.scale(5);
        };

        const onMouseUp = () => {
          this.cursors.large.scale(1).opaque(1);
          this.cursors.small.scale(1);
        };

        imageWrapper.addEventListener("mousedown", onMouseDown);
        imageWrapper.addEventListener("mouseup", onMouseUp);
      }

      initEventsOnSlider(slider) {
        const imageWrapper = document.querySelector(".slider__image--wrapper");

        const onMouseEnter = () => {
          this.cursors.large.scale(2).opaque(0);
          this.cursors.small.scale(5).setTranslateLerpAmount(0.25);
          this.cursors.close.opaque(1).scale(1);
        };

        const onMouseLeave = () => {
          this.cursors.large.scale(1).opaque(1);
          this.cursors.small.scale(1).setTranslateLerpAmount(0.85);
          this.cursors.close.opaque(0).scale(0.5);
        };

        slider.onFullscreen(() => {
          onMouseEnter();
          imageWrapper.addEventListener("mouseenter", onMouseEnter);
          imageWrapper.addEventListener("mouseleave", onMouseLeave);
        });

        slider.offFullscreen(() => {
          onMouseLeave();
          imageWrapper.removeEventListener("mouseenter", onMouseEnter);
          imageWrapper.removeEventListener("mouseleave", onMouseLeave);
        });
      }
    }

    let clicked = false;

    class Slideshow {
      constructor(el) {
        this.DOM = { el };
        this.DOM.imageWrapperEl = this.DOM.el.querySelector(
          ".slider__image--wrapper"
        );

        this.current = 0;
        this.GlSlider = new GlSlider();
        this.GlSlider.init(document.querySelector(".slider__image--wrapper"));
        this.initEvents();
      }

      initAnimation() {
        const tl = gsap
          .timeline({
            defaults: { duration: 1, ease: "power4.inOut" },
            delay: 0.25
          })
          .addLabel("start", 0)
          .addLabel("upcoming", 1.25);
        tl.to(
          this.DOM.imageWrapperEl,
          {
            duration: 1.25,
            translateY: 0,
            ease: "sine.out",
            onUpdate: () => {
              this.GlSlider.setBounds();
            }
          },
          "start"
        ).to(
          this.GlSlider.material.uniforms.uAmplitude,
          {
            duration: 1,
            value: 1,
            repeat: 1,
            yoyo: true,
            yoyoEase: "sine.out",
            ease: "expo.out",
            onComplete: () => {
              this.GlSlider.material.uniforms.uTranslating = false;
            }
          },
          "start"
        );
      }

      initEvents() {
        this.onImageClickEv = () => {
          if (this.isAnimating) return;

          clicked = !clicked;

          gsap
            .timeline({
              defaults: { duration: 1, ease: "power4.inOut" },
              onStart: () => {
                this.isAnimating = true;
                if (clicked) {
                  this.GlSlider.scaleImage("up");
                  if (this.onFullscreenCallbackFn)
                    this.onFullscreenCallbackFn();
                } else {
                  this.GlSlider.scaleImage("down");
                  if (this.offFullscreenCallbackFn)
                    this.offFullscreenCallbackFn();
                }
              },
              onComplete: () => {
                this.isAnimating = false;
              }
            })
            .addLabel("start", clicked ? 0 : 0.2);
        };
        this.DOM.imageWrapperEl.addEventListener("click", () =>
          this.onImageClickEv()
        );
      }

      onFullscreen(callback) {
        if (typeof callback == "function") {
          this.onFullscreenCallbackFn = callback;
        }
      }

      offFullscreen(callback) {
        if (typeof callback == "function") {
          this.offFullscreenCallbackFn = callback;
        }
      }
    }

    // -------- MAIN CLASSES [END] --------

    // -------- MAIN CODE [START] --------

    const cursors = new Cursors();

    const slider = new Slideshow(document.querySelector(".slider"));
    slider.initAnimation();
    cursors.init();
    cursors.initEventsOnSlider(slider);
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Red+Rose:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

.my-stats {
  --cursor-stroke: #5631e9;
  --cursor-fill: transparent;
  --cursor-stroke-width: 1px;

  --base-image-width: 450px;
  --base-image-height: 600px;

  --image-width: 450px;
  --image-height: 600px;

  position: relative;
  width: 100vw;
  height: 100vh;
  background: #1f1322;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  main {
    width: 100%;
    height: 100%;
  }

  .slider {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .slider__image--wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    width: var(--image-width);
    height: var(--image-height);
    transform: translate(-50%, -50%);
    overflow: hidden;
    z-index: 1;
    user-select: none;

    .slider__image {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
      height: 100%;
      display: none;
    }
  }
}

@media (any-pointer: fine) {
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 100;

    &--large .cursor__inner {
      fill: var(--cursor-fill);
      stroke: var(--cursor-stroke);
      stroke-width: var(--cursor-stroke-width);
      opacity: 0.7;
    }
    &--small .cursor__inner {
      fill: var(--cursor-stroke);
      stroke: var(--cursor-fill);
      opacity: 0.7;
    }

    &--close {
      fill: none;
      stroke: var(--cursor-stroke);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 32px;
      mix-blend-mode: difference;
    }
  }
}

@media only screen and (max-width: 53em) {
  .my-stats {
    --image-width: calc(var(--base-image-width) / 1.125);
    --image-height: calc(var(--base-image-height) / 1.125);
  }
}

@media only screen and (max-width: 32em) {
  .my-stats {
    --image-width: calc(var(--base-image-width) / 1.5);
    --image-height: calc(var(--base-image-height) / 1.5);
  }
}
</style>

<style></style>
