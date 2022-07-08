import './style.css'

class App {
  constructor() {
    let canvas:HTMLCanvasElement = document.createElement("canvas")
    canvas.style.width="100%"
    canvas.style.height="100%"
    canvas.id="gameCanvas"
    document.body.appendChild(canvas)

    let engine:BABYLON.Engine = new BABYLON.Engine(canvas, true)
    let scene:BABYLON.Scene = new BABYLON.Scene(engine)

    let camera:BABYLON.ArcRotateCamera = new BABYLON.ArcRotateCamera("camera",Math.PI/2,Math.PI/2,2,BABYLON.Vector3.Zero(),scene)
    camera.attachControl(canvas, true)
     new BABYLON.HemisphericLight("light1",new BABYLON.Vector3(1,1,0),scene)

     BABYLON.MeshBuilder.CreateSphere("sphere",{diameter:1},scene)

    engine.runRenderLoop(() => {
     scene.render()
   })
    
  }
}
new App()