import * as THREE from "three";
import * as dat from "dat.gui";

let lightColor = "#b9d5ff";

const lightParameters = {
  spotLightColor: 0xff7d46,
  directionalLightColor: 0xff7d46,
  spotLightColor2: 0xffffff,

}

// Debug
const gui = new dat.GUI();
const scene = new THREE.Scene();


// Lights

/* const lights = gui.addFolder("Lights"); */

// Ambient light
export const ambientLight = new THREE.AmbientLight(lightColor, 0.1);


// Directional light
export const directionalLight = new THREE.DirectionalLight(lightParameters.directionalLightColor, 3);
directionalLight.position.set(0, 0, 0);


// Spot light
export const spotLight = new THREE.SpotLight(lightParameters.spotLightColor, 3, 32, -22);
spotLight.position.set(18, 19, 0);

export const spotLight2 = new THREE.SpotLight(lightParameters.spotLightColor, 3, 46, -22);
spotLight2.position.set(51, 19, 0);

export const spotLight3 = new THREE.SpotLight(lightParameters.spotLightColor2, 3.15, 66, -22);
spotLight3.position.set(-3, 46, 0);

export const spotLight4 = new THREE.SpotLight(lightParameters.spotLightColor2, 2, 69, -22);
spotLight4.position.set(73, 50, 0);

gui.add(spotLight4, "intensity").min(0).max(50).step(0.001);
gui.add(spotLight4, "distance").min(0).max(100).step(0.001);
gui.add(spotLight4, "angle").min(-100).max(100).step(1);
gui.add(spotLight4.position, "x").min(-100).max(100).step(0.001);
gui.add(spotLight4.position, "y").min(-100).max(100).step(0.001);
gui.add(spotLight4.position, "z").min(-100).max(100).step(0.001);



