import "./style.css";
import * as THREE from "three";
import * as dat from "dat.gui";
import gsap from "gsap";

import { room, floor, roof } from "./components/room";
import { room2, roof2 } from "./components/room2";
import {
  staffs,
  light,
  stairs,
  laundry,
  power,
  trash,
  windowRoom,
  armario,
  couch,
  lights2,
} from "./components/objects";

import {
  ambientLight,
  directionalLight,
  spotLight,
  spotLight2,
  spotLight3,
  spotLight4,
} from "./components/lights";
import { sizes, camera } from "./components/camera";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

//Objects
scene.add(room);
scene.add(floor);
scene.add(staffs);
scene.add(stairs);
scene.add(light);
scene.add(power);
scene.add(laundry);
scene.add(trash);
scene.add(windowRoom);
scene.add(armario);
scene.add(couch);
scene.add(lights2);

// Second Floor
scene.add(room2);
scene.add(roof2);

/**
 * Lights
 */
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(spotLight);
scene.add(spotLight2);
scene.add(spotLight3);
scene.add(spotLight4);

/* 
const pointLightHelper = new THREE.PointLightHelper(spotLight, 2)
scene.add(pointLightHelper) */

/**
 * Sprites
 */

/* var map = new THREE.TextureLoader().load("/textures/mario_PNG125.png");
var material = new THREE.SpriteMaterial({ map: map, color: 0xffffff });
var sprite = new THREE.Sprite(material);


sprite.castShadow = true;

sprite.position.x = 0;
sprite.position.y = 16;
sprite.position.z = 0;

sprite.scale.set(30, 30, 30);

scene.add(sprite); */

/**
 * Camera
 */
scene.add(camera);

// Controls
let controls = new FlyControls(camera, canvas);

controls.movementSpeed = 0.5;
controls.rollSpeed = 0;
controls.autoForward = false;
controls.dragToLook = true;

controls.enableDamping = true;
controls.enableZoom = true;
// Camera Constraints
controls.minPolarAngle = 1.3;
controls.maxPolarAngle = 1.5;
controls.minAzimuthAngle = 1.5;
controls.maxAzimuthAngle = 1.6;

/**
 * Raycaster
 */

const raycaster = new THREE.Raycaster();

/**
 * Mouse Events
 */
const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / sizes.width) * 2 - 1;
  mouse.y = -(event.clientY / sizes.height) * 2 + 1;
});

let isSecondFloor = false;



window.addEventListener("click", () => {
  if (currentIntersect) {
    if (currentIntersect.object === stairs && !isSecondFloor) {
      console.log("stairs");
      gsap.to(camera.position, { duration: 2, delay: 0, x: 20, y: 13, z: 2 });
      gsap.to(camera.position, { duration: 2, delay: 2, x: 20, y: 50, z: 2 });
      gsap.to(camera.position, { duration: 2, delay: 4, x: 60, y: 50, z: 2 });
      isSecondFloor = true;
    } else if (currentIntersect.object === stairs && isSecondFloor) {
      console.log("stairs");
      gsap.to(camera.position, { duration: 2, delay: 0, x: 20, y: 50, z: 2 });
      gsap.to(camera.position, { duration: 2, delay: 2, x: 20, y: 13, z: 2 });
      gsap.to(camera.position, { duration: 2, delay: 4, x: 60, y: 13, z: 2 });
      isSecondFloor = false;
    }
  }
});

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#fff");

/**
 * Shadows
 */
renderer.shadowMap.enabled = true;
spotLight.castShadow = true;
directionalLight.castShadow = true;
floor.receiveShadow = true;

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

/**
 * Animate
 */

const clock = new THREE.Clock();
let currentIntersect = null;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update Orbital Controls
  controls.update(0.5);

  // Cast a ray
  const rayDirection = new THREE.Vector3(100, 0, 0);
  rayDirection.normalize();

  raycaster.setFromCamera(mouse, camera);

  const objectsToTest = [stairs];
  const intersects = raycaster.intersectObjects(objectsToTest);

  if (intersects.length) {
    if (!currentIntersect) {
      stairs.material.color.set("#b35f45");
      console.log("mouse enter");
    }

    currentIntersect = intersects[0];
  } else {
    if (currentIntersect) {
      stairs.material.color.set("#fff");
      console.log("mouse leave");
    }

    currentIntersect = null;
  }

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
