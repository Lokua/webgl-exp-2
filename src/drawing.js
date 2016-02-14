import THREE from 'three'

export default class Drawing {

  constructor() {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    this.renderer = new THREE.WebGLRenderer({
      antialiasing: true,
      autoClear: true,
      autoClearColor: true,
      autoClearDepth: true,
      preserveDrawingBuffer: true
    })
    this.renderer.setSize(512, 512)
  }

  render(params) {
    this.clear()
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      wireframe: true,
      transparent: true
    })
    material.opacity = params.opacity
    let n = params.n
    while (n > 0) {
      const v = n*0.1
      const geometry = new THREE.BoxGeometry(v,v,v)
      const cube = new THREE.Mesh(geometry, material)
      cube.rotation.x = n * params.rotateX
      cube.rotation.y = n * params.rotateY
      this.scene.add(cube)
      n = n-2
    }
    this.camera.position.z = params.z
    this.renderer.render(this.scene, this.camera)
  }

  clear() {
    this.renderer.clear()
    for (let i = 0; i < this.scene.children.length; i++) {
      this.scene.remove(this.scene.children[i])
    }
  }
}
