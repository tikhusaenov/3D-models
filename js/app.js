let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#ABE6FF")
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


let geometry = new THREE.BoxGeometry(1, 1,1 );
let material = new THREE.MeshNormalMaterial()
let box = new THREE.Mesh( geometry, material );
box.position.y = -2

scene.add(box)
let geometry1 = new THREE.BoxGeometry(1, 1,1 );
let material1 = new THREE.MeshNormalMaterial();
let box1 = new THREE.Mesh( geometry1, material1 );
box1.position.x = 5

scene.add(box1)
let geometry2 = new THREE.BoxGeometry(1, 1,1 );
let material2 = new THREE.MeshNormalMaterial();
let box2 = new THREE.Mesh( geometry2, material2 );
box2.position.x = -5

scene.add(box2)

camera.position.z = 5;

let light = new THREE.PointLight("#ffffff", 1, 500)
light.position.set(10,2, 25)
scene.add(light)

let animate = function () {
    requestAnimationFrame( animate );

    box.rotation.x += 0.02
    box.rotation.y += 0.02
    box.position.y += 0.01
    box.position.z += 0.01

    box1.rotation.x += 0.02
    box1.rotation.y += 0.02
    box1.position.y += 0.01
    box1.position.z += 0.01

    box2.rotation.x += 0.02
    box2.rotation.y += 0.02
    box2.position.y += 0.01
    box2.position.z += 0.01




    renderer.render( scene, camera );
};

animate();
