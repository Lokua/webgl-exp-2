import THREE from 'three'
import store from './store'
import { randomOffset } from './random'

const PHI = (1+Math.sqrt(5))/2
const CANVAS_SIZE = 768

export default class Drawing {

  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialiasing: true,
      autoClear: true,
      autoClearColor: true,
      autoClearDepth: true,
      preserveDrawingBuffer: true
    })
    this.renderer.setSize(CANVAS_SIZE, CANVAS_SIZE)
  }

  render(params) {
    this.__drawing0(params)
  }

  __drawing0(params) {
    console.log('params:', params)
    this.renderer.setClearColor(
      params.background ? 0xffffff : 0x000000, 
      1
    )
    this.clear()
    let n = params.iter
    while (n > 0) {

      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.getColor(params.colors, params.offset)),
        wireframe: true,
        transparent: true
      })
      material.opacity = params.opacity

      const v = Math.pow(n, 2)/10

      // sphere: radius, widthSegments, heightSegments
      const geometry = new THREE.CircleGeometry(
        params.a * v,
        params.b * v,
        params.c * v
      )

      const cube = new THREE.Mesh(geometry, material)
      cube.rotation.x = (n/10) * this.dtor(params.rotateX)
      cube.rotation.y = (n/10) * this.dtor(params.rotateY)
      cube.rotation.z = (n/10) * this.dtor(params.rotateZ)

      this.scene.add(cube)

      n = n-2
    }
    this.camera.position.z = params.z
    this.renderer.render(this.scene, this.camera)
  }

  __drawing1(params, colors) {
    this.clear()
    let n = params.iter
    while (n > 0) {

      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(this.getColor(colors, params.offset)),
        // wireframe: true,
        transparent: true
      })
      material.opacity = params.opacity

      const v = n*0.1
      const geometry = new THREE.SphereGeometry(v,v,v)

      const cube = new THREE.Mesh(geometry, material)
      cube.rotation.x = (PHI*n*params.rotateX)*0.01
      cube.rotation.y = (PHI*n*params.rotateY)*0.01
      cube.rotation.z = (PHI*n*params.rotateZ)*0.01

      const wireframe = new THREE.WireframeHelper(cube, 0xffffff)

      this.scene.add(cube)
      this.scene.add(wireframe)

      n = n-2
    }
    this.camera.position.z = params.z
    this.renderer.render(this.scene, this.camera)
  }

  getColor(components, offset) {
    const r = this.wrapColor(components.r + randomOffset(offset))
    const g = this.wrapColor(components.g + randomOffset(offset))
    const b = this.wrapColor(components.b + randomOffset(offset))
    return `rgb(${r},${g},${b})`
  }

  wrapColor(x) {
    return x < 0 ? 255 - x : x > 255 ? x - 255 : x
  }

  dtor(deg) {
    return deg * (Math.PI/180)
  }

  clear() {
    this.renderer.clear()
    for (let i = 0; i < this.scene.children.length; i++) {
      this.scene.remove(this.scene.children[i])
    }
  }
}
