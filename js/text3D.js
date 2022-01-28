//import * as THREE from 'https://cdn.skypack.dev/three@0.130.0';

import * as THREE from '../three.js-master/build/three.module.js';

import { GLTFLoader } from '/js/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const hlight = new THREE.AmbientLight(0x404040, 100);
scene.add(hlight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load('uploads_files_2815401_Ferarri+Testarossa.glb', function(gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
});

init();

/*const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();*/