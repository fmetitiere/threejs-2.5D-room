import * as THREE from "three";

// Floor
export const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(100, 100, 2, 2),
  new THREE.MeshStandardMaterial({})
);

floor.rotation.x = -Math.PI * 0.5;
floor.position.y = 0;
