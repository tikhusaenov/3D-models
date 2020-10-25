let scene, camera, renderer, mesh, ambientLight, light
let meshFloor
let keyboard = {}

let player = {
    height: 1.8,
    speed: 0.1,
    turnSpeed: Math.PI * 0.01
}
function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(90, window.innerWidth/window.innerHeight, 0.1, 1000)
    mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1,1,1),
        new THREE.MeshPhongMaterial({color: 0xff9999, wireframe: false})
    )
    scene.add(mesh)
    mesh.position.y += 1

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(10,10, 10, 10),
        new THREE.MeshPhongMaterial({color: 0xffffff, wireframe: false})
    )
    meshFloor.rotation.x -= Math.PI / 2
    scene.add(meshFloor)

    ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    light = new THREE.PointLight(0xffffff, 0.8, 18)
    light.position.set(-3, 6, -3)
    light.castShadow = true
    light.shadow.camera.near = 0.1
    light.shadow.camera.far = 25
    scene.add(light)

    camera.position.set(0,player.height,-5)
    camera.lookAt(new THREE.Vector3(0,player.height,0))

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.BasicShadowMap
    document.body.appendChild(renderer.domElement)

    animate()
}


function animate() {
    requestAnimationFrame(animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.02

    if (keyboard[87]) { // w - moving forward
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed
    }
    if (keyboard[83]) { // s - moving forward
        camera.position.x += Math.sin(camera.rotation.y) * player.speed
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed
    }
    if (keyboard[65]) { // a - moving left
        camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed
    }
    if (keyboard[68]) { // d - moving right
        camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed
    }


    if(keyboard[37]) {  // left key
        camera.rotation.y -= player.turnSpeed
    }
    if(keyboard[39]) {  // right key
        camera.rotation.y += player.turnSpeed
    }
    renderer.render(scene, camera)
}

function keyDown(event) {
    keyboard[event.keyCode] = true

}
function keyUp(event) {
    keyboard[event.keyCode] = false
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)

window.onload = init