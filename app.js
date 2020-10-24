

let scene, camera, renderer

function init() {
    scene = new THREE.Scene()
    scene.background = new THREE.Color("#000000")
    camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,1,5000)
    let hlight = new THREE.AmbientLight(0x404040, 100)
    scene.add(hlight)

    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    let loader = new THREE.GLTFLoader()
}