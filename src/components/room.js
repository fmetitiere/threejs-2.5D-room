import * as THREE from "three";

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();

// Floor Textures
const floorColorTexture = textureLoader.load("/textures/wood.jpg");

floorColorTexture.repeat.set(5, 5);

floorColorTexture.wrapS = THREE.RepeatWrapping;
floorColorTexture.wrapT = THREE.RepeatWrapping;

const wallColorTexture = textureLoader.load("/textures/brick.jpg");
wallColorTexture.repeat.set(2, 2);
wallColorTexture.wrapS = THREE.RepeatWrapping;
wallColorTexture.wrapT = THREE.RepeatWrapping;


const wall2ColorTexture = textureLoader.load("/textures/brick.jpg");
wall2ColorTexture.repeat.set(3, 1);
wall2ColorTexture.wrapS = THREE.RepeatWrapping;
wall2ColorTexture.wrapT = THREE.RepeatWrapping;

// Walls

export const room = new THREE.Group();

const wall1 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 38, 2, 2),
  new THREE.MeshStandardMaterial({
    map: wall2ColorTexture,
  })
);

wall1.rotation.x = -Math.PI * 1;
wall1.position.y = 7;
wall1.position.z = 30;

wall1.material.roughness = 0.6;
wall1.material.metalness = 0.5;

room.add(wall1);

const wall2 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 38, 2, 2),
  new THREE.MeshStandardMaterial({
    map: wall2ColorTexture,
  })
);

wall2.rotation.x = Math.PI * 2;
wall2.position.y = 7;
wall2.position.z = -30;

wall2.material.roughness = 0.6;
wall2.material.metalness = 0.5;

room.add(wall2);

const wall3 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 130, 2, 2),
  new THREE.MeshStandardMaterial({
    map: wallColorTexture,
  })
);

wall3.rotation.y = Math.PI * -1.5;
wall3.position.x = -10;
wall3.position.y = 7;
wall3.position.z = 0;

wall3.material.roughness = 0.6;
wall3.material.metalness = 0.5;

room.add(wall3);

// Roof
export const roof = new THREE.Mesh(
  new THREE.BoxBufferGeometry(100, 100, 2, 2),
  new THREE.MeshStandardMaterial({
    map: floorColorTexture,
  })
);

roof.rotation.x = Math.PI * 0.5;
roof.position.x = 50;
roof.position.y = 25;

room.add(roof);

// Floor
export const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100, 2, 2),
  new THREE.MeshStandardMaterial({
    map: floorColorTexture,
  })
);

floor.material.roughness = 0.6;
floor.material.metalness = 0.5;

floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
