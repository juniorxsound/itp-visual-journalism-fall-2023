import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei";

import AnimatedCamera from "./AnimatedCamera";
import StatueGLTFObject from "./StatueGLTFObject";

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas>
        {/* Camera 🎥 */}
        <AnimatedCamera />

        {/* Lights 💡 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 3, 2]} intensity={5} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["grey"]} attach="background" />

        {/* Objects 📦 */}
        <StatueGLTFObject position={[0, 0, 0]} modelUrl={"/statue.glb"} />
      </Canvas>
    </div>
  );
}

export default Scene;
