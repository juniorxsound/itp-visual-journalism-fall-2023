import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

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
        <Suspense fallback={null}>
          <StatueGLTFObject position={[0, 0, 0]} modelUrl={"/statue.glb"} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
