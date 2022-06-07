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

// Base camera
export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  200
);
camera.position.x = 50;
camera.position.y = 13;
camera.position.z = 2;

camera.rotation.y = Math.PI * 0.5;

const cameraConfig = gui.addFolder("Camera");

cameraConfig.add(camera.position, "x").min(-100).max(100).step(0.001);
cameraConfig.add(camera.position, "y").min(-100).max(100).step(0.001);
cameraConfig.add(camera.position, "z").min(-100).max(100).step(0.001);
