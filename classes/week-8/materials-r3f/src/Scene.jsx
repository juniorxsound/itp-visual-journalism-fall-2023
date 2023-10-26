import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import SimpleGLTFObject from "./SimpleGLTFObject";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { BackSide } from "three";

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas shadows={true}>
        {/* Environment map */}
        <Environment preset="night" />

        {/* Camera 🎥 */}
        <PerspectiveCamera position={[0, 2.5, 10]} makeDefault />

        {/* Lights 💡 */}
        <ambientLight intensity={0.15} />
        <pointLight color="green" position={[1, 1, 1]} intensity={3} />
        <pointLight color="yellow" position={[-2, 3, 1]} intensity={3} />
        <pointLight color="blue" position={[2, 3, 1]} intensity={3} />
        <pointLight color="white" position={[0, 1, 2.5]} intensity={3} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["grey"]} attach="background" />

        {/* R3F way of assigning materials as children */}
        <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[5, 5, 5]} />
          <meshPhysicalMaterial side={BackSide} />
        </mesh>

        <mesh position={[0, 2.5, 0]}>
          <sphereGeometry />
          <meshPhysicalMaterial roughness={0.3} metalness={0.6} />
        </mesh>

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <SimpleGLTFObject position={[0, 0.1, 2]} modelUrl={"/or.glb"} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
