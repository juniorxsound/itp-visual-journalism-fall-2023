import { Canvas } from "@react-three/fiber";
import { BackSide } from "three";
import { Environment } from "@react-three/drei";

import AnimatedCamera from "./AnimatedCamera";
import OrangeAnimatedHighlight from "./OrangeAnimatedHighlight";
import BlueAnimatedHighlight from "./BlueAnimatedHighlight";

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas>
        <Environment preset="night" />

        {/* Camera 🎥 */}
        <AnimatedCamera />

        {/* Lights 💡 */}
        <ambientLight intensity={0.15} color="white" />
        <pointLight color="green" position={[1, 1, 1]} intensity={3} />
        <pointLight color="yellow" position={[-2, 3, 1]} intensity={3} />
        <pointLight color="blue" position={[2, 3, 1]} intensity={3} />
        <pointLight color="white" position={[0, 1, 2.5]} intensity={3} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["grey"]} attach="background" />

        {/* Objects 📦 */}
        <mesh position={[0, 2.5, 0]} rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[5, 5, 5]} />
          <meshStandardMaterial side={BackSide} />
        </mesh>

        {/* Our animated highlights */}
        <OrangeAnimatedHighlight />
        <BlueAnimatedHighlight />
      </Canvas>
    </div>
  );
}

export default Scene;
