import * as THREE from "three";
import gsap from "gsap";

let renderer,
  camera,
  clock,
  scene = null;

function initAndSetSceneCameraAndRenderer() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  clock = new THREE.Clock();

  camera.position.z = 50;
  renderer.setPixelRatio(gsap.utils.clamp(1.5, 1, window.devicePixelRatio));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf2f2f2, 0);

  return {
    scene,
    camera,
    renderer
  };
}

function addCanvasToTheDom() {
  const canvas = renderer.domElement;
  canvas.classList.add("dom-webGl");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  document.querySelector(".wave-card").appendChild(canvas);
}

function onResize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();

  for (let i = 0; i < scene.children.length; i++) {
    const plane = scene.children[i];
    if (plane.resize) plane.resize();
  }
}

function manageResize() {
  window.addEventListener("resize", onResize);
  requestAnimationFrame(() => checkClock());
}

function checkClock() {
  let elapsed = clock.getElapsedTime();

  for (let i = 0; i < scene.children.length; i++) {
    const plane = scene.children[i];
    if (plane.updateTime) plane.updateTime(elapsed);
  }

  render();
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(() => checkClock());
}

export function initWebGl() {
  initAndSetSceneCameraAndRenderer();
  addCanvasToTheDom();
  manageResize();
  checkClock();

  return { renderer, camera, scene };
}
