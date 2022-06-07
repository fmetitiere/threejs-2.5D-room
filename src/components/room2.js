import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();


export const room2 = new THREE.Group();

const wall1 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 40, 2, 2),
  new THREE.MeshStandardMaterial({
  })
);

wall1.rotation.x = -Math.PI * 1;
wall1.position.y = 45;
wall1.position.z = 30;

wall1.material.roughness = 0.6;
wall1.material.metalness = 0.5;

room2.add(wall1);


const wall2 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 40, 2, 2),
  new THREE.MeshStandardMaterial({
  })
);

wall2.rotation.x = Math.PI * 2;
wall2.position.y = 45;
wall2.position.z = -30;

wall2.material.roughness = 0.6;
wall2.material.metalness = 0.5;

room2.add(wall2);


// Floor
export const floor2 = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100, 2, 2),
  new THREE.MeshStandardMaterial({
  })
);

floor2.material.roughness = 0.6;
floor2.material.metalness = 0.5;

floor2.rotation.x = -Math.PI * 0.5;
floor2.position.x = 50;
floor2.position.y = 30;


// Roof
export const roof2 = new THREE.Mesh(
  new THREE.BoxBufferGeometry(100, 100, 2, 2),
  new THREE.MeshStandardMaterial({
  })
);

wall1.material.color.set('#fd5a5a')
wall2.material.color.set('#fd5a5a')
roof2.material.color.set('#fd5a5a')


roof2.rotation.x = Math.PI * 0.5;
roof2.position.x = 0;
roof2.position.y = 65;

room2.add(roof2);
