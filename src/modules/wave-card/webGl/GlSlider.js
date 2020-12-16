import * as THREE from "three";
import gsap from "gsap";
import { initWebGl } from "@/modules/wave-card/webGl/webGl";

let mouseOver = false,
  mouseDown = false;
let nMouse = new THREE.Vector2();

export class GlSlider extends THREE.Object3D {
  init(el) {
    const vertexShader = document.getElementById("vertexShader").innerHTML;
    const fragmentShader = document.getElementById("fragmentShader").innerHTML;

    const planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    const planeMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader
    });

    window.addEventListener("mousemove", event => {
      event.preventDefault();
      nMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      nMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    const { scene, camera } = initWebGl();
    this.scene = scene;
    this.camera = camera;

    this.el = el;
    this.resize();
    this.geometry = planeGeometry;
    this.material = planeMaterial.clone();

    this.material.uniforms = {
      uCurrTex: { value: 0 },
      uTime: { value: 0 },
      uProg: { value: 0 },
      uAmplitude: { value: 0 },
      uProgDirection: { value: 0 },
      uMeshSize: { value: [this.rect.width, this.rect.height] },
      uImageSize: { value: [0, 0] },
      uMousePos: { value: [0, 0] },
      uMouseOverAmp: { value: 0 },
      uAnimating: { value: false },
      uRadius: { value: 0.08 },
      uTranslating: { value: true }
    };

    this.imageScale = 1;

    this.textures = [];

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.mouseLerpAmount = 0.1;

    this.state = {
      animating: false,
      current: 0
    };

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.add(this.mesh);

    this.scene.add(this);

    this.loadTextures();
    this.addEvents();
  }

  resize() {
    this.setBounds();
  }

  setBounds() {
    this.rect = this.el.getBoundingClientRect();

    this.bounds = {
      left: this.rect.left,
      top: this.rect.top + window.scrollY,
      width: this.rect.width,
      height: this.rect.height
    };

    this.updateSize();
    this.updatePosition();
  }

  updateSize() {
    this.camUnit = this.calculateUnitSize(
      this.camera.position.z - this.position.z
    );

    const x = this.bounds.width / window.innerWidth;
    const y = this.bounds.height / window.innerHeight;

    if (!x || !y) return;

    this.scale.x = this.camUnit.width * x;
    this.scale.y = this.camUnit.height * y;
  }

  calculateUnitSize(distance = this.position.z) {
    const vFov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFov / 2) * distance;
    const width = height * this.camera.aspect;

    return { width, height };
  }

  updateY(y = 0) {
    const { top, height } = this.bounds;

    this.position.y = this.camUnit.height / 2 - this.scale.y / 2;
    this.position.y -= ((top - y) / window.innerHeight) * this.camUnit.height;

    this.progress = gsap.utils.clamp(
      0,
      1,
      1 - (-y + top + height) / (window.innerHeight + height)
    );
  }

  updateX(x = 0) {
    const { left } = this.bounds;

    this.position.x = -(this.camUnit.width / 2) + this.scale.x / 2;
    this.position.x += ((left + x) / window.innerWidth) * this.camUnit.width;
  }

  updatePosition(y) {
    this.updateY(y);
    this.updateX(0);
  }

  loadTextures() {
    const manager = new THREE.LoadingManager(() => {
      this.material.uniforms.uCurrTex.value = this.textures[0];
    });
    const loader = new THREE.TextureLoader(manager);
    const imgs = [...this.el.querySelectorAll("img")];

    imgs.forEach(img => {
      loader.load(img.src, texture => {
        texture.minFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        this.material.uniforms.uImageSize.value = [
          img.naturalWidth,
          img.naturalHeight
        ];
        this.textures.push(texture);
      });
    });
  }

  updateTime(time) {
    this.material.uniforms.uTime.value = time;
    this.run();
  }

  addEvents() {
    this.el.addEventListener("mouseenter", () => (mouseOver = true));
    this.el.addEventListener("mouseleave", () => (mouseOver = false));
    this.el.addEventListener("mousedown", () => (mouseDown = true));
    this.el.addEventListener("mouseup", () => (mouseDown = false));
  }

  scaleImage(direction) {
    const imageTl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: "elastic.out(1, 1)",
        onUpdate: () => {
          this.resize();
        }
      }
    });
    if (direction === "up") {
      imageTl.to(this.el, {
        scale: window.innerHeight / 600
      });
    } else if (direction === "down") {
      imageTl.to(this.el, {
        scale: 1
      });
    }
  }

  run() {
    let m = mouseOver ? nMouse : new THREE.Vector2(0, 0);
    this.mouse.lerp(m, this.mouseLerpAmount);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    let intersects = this.raycaster.intersectObject(this.mesh);
    if (intersects.length > 0) {
      this.material.uniforms.uMousePos.value = [
        intersects[0].uv.x,
        intersects[0].uv.y
      ];
    }

    if (mouseOver) {
      this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(
        this.material.uniforms.uMouseOverAmp.value,
        1,
        0.08
      );
      this.mouseLerpAmount = THREE.MathUtils.lerp(
        this.mouseLerpAmount,
        0.1,
        0.5
      );
    } else {
      this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(
        this.material.uniforms.uMouseOverAmp.value,
        0,
        0.08
      );
      this.mouseLerpAmount = THREE.MathUtils.lerp(this.mouseLerpAmount, 0, 0.5);
    }

    if (mouseOver && mouseDown) {
      this.material.uniforms.uRadius.value = THREE.MathUtils.lerp(
        this.material.uniforms.uRadius.value,
        1,
        0.01
      );
    } else if (mouseOver && !mouseDown) {
      this.material.uniforms.uRadius.value = THREE.MathUtils.lerp(
        this.material.uniforms.uRadius.value,
        0.08,
        0.08
      );
    }

    if (this.state.animating) {
      this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(
        this.material.uniforms.uMouseOverAmp.value,
        0,
        0.1
      );
    }
  }
}
