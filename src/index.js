// Define scene, camera and renderer.
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75 /* field of view */
    , window.innerWidth / window.innerHeight /* aspect ratio */
    , 0.1 /* near */
    , 1000 /* far */
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(
    window.innerWidth
    , window.innerHeight
    , true
    // , false /* will render your app at half resolution, given that your <canvas> has 100% width and height. */
);
document.body.appendChild( renderer.domElement );
// Add cube.
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(
    {
        color: 0x00ff00
    }
);
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
// Move the camera out a bit from coordinates (0,0,0).
camera.position.z = 5;
// Animate defined cube.
const animate = function() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};
animate();
