import * as THREE from "three";
import * as dat from "dat.gui";

const gui = new dat.GUI();

/**
 * Sizes
 */
export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Base camera
export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 50;
camera.position.y = 12;
camera.position.z = 0;


const cameraConfig = gui.addFolder("Camera");

cameraConfig.add(camera.position, "x").min(-100).max(100).step(0.001);
cameraConfig.add(camera.position, "y").min(-100).max(100).step(0.001);
cameraConfig.add(camera.position, "z").min(-100).max(100).step(0.001);