import * as THREE from "three";
import * as dat from "dat.gui";

// Debug
const gui = new dat.GUI();

// Staff
const textureLoader = new THREE.TextureLoader();
const staffsColorTexture = textureLoader.load("/textures/laundry-1.png");

export const staffs = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20, 1, 1),
  new THREE.MeshStandardMaterial({
    map: staffsColorTexture,
    transparent: true,
  })
);

staffs.castShadow = true;
staffs.rotation.y = Math.PI * 0.5;
staffs.position.set(10, 10, 18);

staffs.material.roughness = 0.1;
staffs.material.metalness = 0.2;


// Stairs
const stairsColorTexture = textureLoader.load("/textures/stairs.png");

export const stairs = new THREE.Mesh(
  new THREE.PlaneGeometry(35, 35, 1, 1),
  new THREE.MeshStandardMaterial({
    map: stairsColorTexture,
    transparent: true,
  })
);

stairs.castShadow = true;
stairs.rotation.y = Math.PI * 0.5;
stairs.rotation.z = 0.1;

stairs.position.set(-5, 15, -18);


stairs.material.roughness = 0.1;
stairs.material.metalness = 0.2;

// Light
const lightColorTexture = textureLoader.load("/textures/light.png");

export const light = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20, 1, 1),
  new THREE.MeshStandardMaterial({
    map: lightColorTexture,
    transparent: true,
  })
);

light.castShadow = true;
light.rotation.y = Math.PI * 0.5;
light.position.set(15, 22, -0.7);

light.scale.set(0.2, 0.4);

light.material.roughness = 0.1;
light.material.metalness = 0.2;



// Laundry
const laundryColorTexture = textureLoader.load("/textures/laundry.png");

export const laundry = new THREE.Mesh(
  new THREE.PlaneGeometry(17, 17, 1, 1),
  new THREE.MeshStandardMaterial({
    map: laundryColorTexture,
    transparent: true,
  })
);

laundry.castShadow = true;
laundry.rotation.y = Math.PI * 0.5;
laundry.position.set(25, 8, -15);

laundry.material.roughness = 0.1;
laundry.material.metalness = 0.2;


// Trash
const trashColorTexture = textureLoader.load("/textures/trash.png");

export const trash = new THREE.Mesh(
  new THREE.PlaneGeometry(8, 8, 1, 1),
  new THREE.MeshStandardMaterial({
    map: trashColorTexture,
    transparent: true,
  })
);

trash.castShadow = true;
trash.rotation.y = Math.PI * 0.5;
trash.position.set(27, 4, -7);

trash.material.roughness = 0.1;
trash.material.metalness = 0.2;


// Power
const powerColorTexture = textureLoader.load("/textures/power.png");

export const power = new THREE.Mesh(
  new THREE.PlaneGeometry(25, 25, 1, 1),
  new THREE.MeshStandardMaterial({
    map: powerColorTexture,
    transparent: true,
  })
);

power.rotation.y = Math.PI * 0.5;
power.position.set(-9, 12, 0);


// Window
const windowTexture = textureLoader.load("/textures/window.png");

export const windowRoom = new THREE.Mesh(
  new THREE.PlaneGeometry(25, 25, 1, 1),
  new THREE.MeshStandardMaterial({
    map: windowTexture,
    transparent: true,
  })
);

windowRoom.rotation.y = Math.PI * 0.5;
windowRoom.position.set(-9, 45, 0);


// Armario
const armarioTexture = textureLoader.load("/textures/armario.png");

export const armario = new THREE.Mesh(
  new THREE.PlaneGeometry(15, 25, 1, 1),
  new THREE.MeshStandardMaterial({
    map: armarioTexture,
    transparent: true,
  })
);

armario.rotation.y = Math.PI * 0.5;
armario.position.set(21, 38, -24);

// Couch
const couchTexture = textureLoader.load("/textures/couch.png");

export const couch = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 15, 1, 1),
  new THREE.MeshStandardMaterial({
    map: couchTexture,
    transparent: true,
  })
);

couch.rotation.y = Math.PI * 0.5;
couch.position.set(17, 31, 19);


// Couch
const lights2Texture = textureLoader.load("/textures/lights-2.png");

export const lights2 = new THREE.Mesh(
  new THREE.PlaneGeometry(25, 15, 1, 1),
  new THREE.MeshStandardMaterial({
    map: lights2Texture,
    transparent: true,
  })
);

lights2.rotation.y = Math.PI * 0.5;
lights2.position.set(27, 57, 1.5);

gui.add(lights2.position, "x").min(-100).max(100).step(0.001);
gui.add(lights2.position, "y").min(-100).max(100).step(0.001);
gui.add(lights2.position, "z").min(-100).max(100).step(0.001);

gui.add(lights2.scale, "x").min(-100).max(100).step(0.001);
gui.add(lights2.scale, "y").min(-100).max(100).step(0.001);

gui.add(lights2.rotation, "x").min(-100).max(100).step(0.001);
gui.add(lights2.rotation, "z").min(-100).max(100).step(0.001);