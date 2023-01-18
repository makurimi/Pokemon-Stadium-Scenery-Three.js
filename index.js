import * as THREE from "./three.js/build/three.module.js"
import {GLTFLoader} from "./three.js/examples/jsm/loaders/GLTFLoader.js"
import {TextGeometry} from "./three.js/examples/jsm/geometries/TextGeometry.js"
import {OrbitControls} from "./three.js/examples/jsm/controls/OrbitControls.js"
import {FontLoader} from "./three.js/examples/jsm/loaders/FontLoader.js"

var scene, renderer, camera, freeCamera, currentCamera, control, loader

function ambientLight(){
    let light = new THREE.AmbientLight("#c2c2c2")
    scene.add(light)
}

const createSpot1 = () => {
    const spot1 = new THREE.SpotLight("#ffffff",1,300)
    spot1.position.set(-120,80,120)
    spot1.lookAt(0,50,0)
    spot1.castShadow = true
    scene.add(spot1)
}
const createSpot2 = () => {
    const spot2 = new THREE.SpotLight("#ffffff",1,300)
    spot2.position.set(120,80,-120)
    spot2.lookAt(0,50,0)
    spot2.castShadow = true
    scene.add(spot2)
}
const createSpot3 = () => {
    const spot3 = new THREE.SpotLight("#ffffff",0.5,300)
    spot3.position.set(120,80,-120)
    spot3.lookAt(0,0,0)
    spot3.castShadow = true
    spot3.angle = Math.PI/4 + Math.PI/6
    scene.add(spot3)
}
const createSpot4 = () => {
    const spot3 = new THREE.SpotLight("#ffffff",0.5,300)
    spot3.position.set(-120,80,120)
    spot3.lookAt(0,0,0)
    spot3.castShadow = true
    spot3.angle = Math.PI/4 + Math.PI/6
    scene.add(spot3)
}

function spotsL(){
    let spotter = new THREE.SpotLight("#ffffff",0.5,300)
    spotter.position.set(0,200,0)
    spotter.lookAt(0,0,0)
    spotter.angle = Math.PI/4 + Math.PI/6
    spotter.castShadow = true
    scene.add(spotter)
}

function createCrateA1(){
    const geometry = new THREE.BoxGeometry(20.5,20.5,20.5)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(150,-2.5,-20)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateA2(){
    const geometry = new THREE.BoxGeometry(20.5,30,20.5)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(150,5,0)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createCrateA3(){
    const geometry = new THREE.BoxGeometry(20.5,13,20.5)
    const texture = loader.load("./assets/texture/crate1.jpeg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(150,-2.5,20)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createLayar1(){
    const geometry = new THREE.PlaneGeometry(80,45,5)
    const texture = loader.load("./assets/texture/tv.png")
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map: texture,
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,80,257)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createLayar2(){
    const geometry = new THREE.PlaneGeometry(80,45,5)
    const texture = loader.load("./assets/texture/tv.png")
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,80,-257)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createTv(){
    const geometry = new THREE.BoxGeometry(80,45,5)
    const material = new THREE.MeshPhongMaterial({
        color: 'black',
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,80,260)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTv1(){
    const geometry = new THREE.BoxGeometry(80,45,5)
    const material = new THREE.MeshPhongMaterial({
        color: 'black',
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0,80,-260)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createPlanet(){
    const geometry = new THREE.SphereGeometry(60,45)
    const texture = loader.load("./assets/texture/bulan.jpg")
    const material = new THREE.MeshPhongMaterial({
        map: texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-300,350,-300)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function ash(){
    let loader = new GLTFLoader()
    loader.load('./assets/model/ash.glb',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(9/15)
        model.position.x = 14  
        model.position.y = -7  
        model.position.z = -50
        model.rotation.y = -Math.PI/7  
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        scene.add(model)
        return model
    })
}
function player2(){
    let loader = new GLTFLoader()
    loader.load('./assets/model/orang2.glb',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(9/15)
        model.position.x = -45  
        model.position.y = -7  
        model.position.z = 60
        model.rotation.y = Math.PI/1  
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        scene.add(model)
        return model
    })
}
function charizard(){
    let loader = new GLTFLoader()
    loader.load('./assets/model/charizardd.glb',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(2/19)
        model.position.x = -14  
        model.position.y = -7 //kedalaman
        model.position.z = 27
        model.rotation.y = Math.PI/1.1  
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        scene.add(model)
        return model
    })
}
function createText() {
    let loader = new FontLoader()
    loader.load('./three.js/examples/fonts/helvetiker_bold.typeface.json',
    function (font1){
        let geometry = new TextGeometry('Pokemon Champs!!',{
            font:font1,
            size:7,
            height:9
        })
        let material = [
            new THREE.MeshPhongMaterial({
                color: "#FF5B00",
                side: THREE.FrontSide
            }),
            new THREE.MeshPhongMaterial({
                color: "#990000",
                side: THREE.BackSide
            })]
        let mesh = new THREE.Mesh(geometry,material)
        mesh.position.set(150, 50, -45)
        mesh.rotation.set(0, -Math.PI/2, 0)
        mesh.castShadow = true
        mesh.receiveShadow = true
        
        scene.add(mesh)
        return mesh
    })
}
function createPlane(){
    let geometry = new THREE.PlaneGeometry(1000,1000,150)
    const texture = loader.load("./assets/texture/grass2.jpg")
    let material = new THREE.MeshStandardMaterial({
        map: texture,
    })
    let mesh = new THREE.Mesh(geometry,material)
    mesh.position.set(0,-10, 0)
    mesh.rotation.x = -Math.PI/2,0,0
    mesh.receiveShadow = true
    scene.add(mesh)
}

function blastoise(){
    let loader = new GLTFLoader()
    loader.load('./assets/model/Blastoise.glb',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(2/19)
        model.position.x = 14
        model.position.y = -7  
        model.position.z = -26
        model.rotation.y = -Math.PI/9  
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        scene.add(model)
        return model
    })
}

//piala
function createTrophy(){
    const geometry = new THREE.BoxGeometry(30,7.5,30)
    const texture = loader.load("./assets/texture/trophy.jpg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-150,-1,0)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTrophy2(){
    const geometry = new THREE.BoxGeometry(20,7.5,20)
    const texture = loader.load("./assets/texture/trophy.jpg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
        
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-150,5,0)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTrophyCyn(){
    const geometry = new THREE.CylinderGeometry(2.5, 2.5,25,7.5,7.5,7.5,7.5)
    const texture = loader.load("./assets/texture/gold.jpg")
    const material = new THREE.MeshPhongMaterial({
        side : THREE.DoubleSide,
        map : texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-150,20,0)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createThropySph(){
    const geometry = new THREE.SphereGeometry(20,15,20,-30,-20,-30)
    const texture = loader.load("./assets/texture/gold.jpg")
    const material = new THREE.MeshPhongMaterial({
        side: THREE.DoubleSide,  
        map: texture
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-150,40,0)
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTree(){
    const geometry = new THREE.ConeGeometry(40,40,20)
    const material = new THREE.MeshLambertMaterial({
        color: 'green'
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(350,80,350)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function createTree2(){
    const geometry = new THREE.ConeGeometry(40,40,20)
    const material = new THREE.MeshLambertMaterial({
        color: 'green'
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(350,60,350)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTree3(){
    const geometry = new THREE.ConeGeometry(40,40,20)
    const material = new THREE.MeshLambertMaterial({
        color: 'green'
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(350,40,350)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}

function createTreeCyn(){
    const geometry = new THREE.CylinderGeometry(10, 10,60)
    const material = new THREE.MeshPhongMaterial({
        color: 'brown'
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(350,10,350)
    mesh.rotation.x = 0
    mesh.receiveShadow = true
    mesh.castShadow= true
    scene.add(mesh)
}
function stadium(){
    let loader = new GLTFLoader()
    loader.load('./assets/model/stadium.glb',
    function(gltf) {
        let model = gltf.scene
        model.scale.setScalar(25)
        model.position.y = -5
        gltf.scene.traverse( function (node) {
            if (node.isMesh || node.isLight) node.castShadow = true;
            if (node.isMesh || node.isLight) node.receiveShadow = true;
        });
        scene.add(model)
        return model
    })
}

function createSkybox(){
    let geometry = new THREE.BoxGeometry(1000,1000,1000)
    let loader = new THREE.TextureLoader()
    
    let right = loader.load("./assets/skybox/starry_bcg.png")
    let left = loader.load("./assets/skybox/starry_bcg.png")
    let top = loader.load("./assets/skybox/starry_bcg.png")
    let bottom = loader.load("./assets/skybox/starry_bcg.png")
    let front = loader.load("./assets/skybox/starry_bcg.png")
    let back = loader.load("./assets/skybox/starry_bcg.png")
    
    let material = [
        new THREE.MeshBasicMaterial({
            map: right,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: left,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: top,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: bottom,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: front,
            side: THREE.BackSide
        }),
        new THREE.MeshBasicMaterial({
            map: back,
            side: THREE.BackSide
        })
    ]
    let mesh = new THREE.Mesh(geometry,material)
    scene.add(mesh)
}


function init(){
    scene = new THREE.Scene()

    const FOV = 65
    const ASPECT = window.innerWidth/window.innerHeight
    const NEAR = 1
    const FAR = 5000
    
    camera = new THREE.PerspectiveCamera(FOV,ASPECT,NEAR, FAR)
    camera.position.set(0,0,-62)
    camera.rotation.set(-Math.PI/0,15,0)
    camera.lookAt(0,0,0)

    freeCamera = new THREE.PerspectiveCamera(FOV,ASPECT,NEAR, FAR)
    freeCamera.position.set(-200,50,0)
    freeCamera.lookAt(0,0,0)

    renderer = new THREE.WebGLRenderer({
        antialias: true
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    document.body.appendChild(renderer.domElement)

    loader = new THREE.TextureLoader()

    currentCamera = camera
    control = new OrbitControls(freeCamera, renderer.domElement)

    createPlane()
    blastoise()
    ambientLight()
    createSpot1()
    createSpot2()
    createSpot3()
    createSpot4()
    createCrateA1()
    createCrateA2()
    createCrateA3()
    spotsL()
    createSkybox()
    stadium()
    ash()
    charizard()
    player2()
    createTv()
    createTv1()
    createPlanet()
    createLayar1()
    createLayar2()
    createText()
    createTrophy()
    createTrophy2()
    createTrophyCyn()
    createThropySph()
    createTree()
    createTree2()
    createTree3()
    createTreeCyn()
}

function camAnimate(event){
    let keyCode = event.keyCode
    if (keyCode == 32) 
    {
        if (currentCamera == camera) {
            currentCamera = freeCamera
            cancelAnimationFrame(animationFrame)
        } else {
            currentCamera = camera
        }
    }
}

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

var ready = false
function buttonClk(){
    raycaster.setFromCamera(mouse,currentCamera)
    const intersects = raycaster.intersectObject(window.button)
    if (intersects.length > 0) {
        const object = intersects[0].object;
        if(ready){
            object.material.color.set("#32cd32");
            ready = false
        } else {
            object.material.color.set("#fada5e");
            ready = true
        }
    }
}

document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})

window.addEventListener('keydown', camAnimate)
window.addEventListener('click', buttonClk)

function render(){
    control.update()
    requestAnimationFrame(render)
    renderer.render(scene,currentCamera)
}

window.onload = function(){
    init();
    render();
}