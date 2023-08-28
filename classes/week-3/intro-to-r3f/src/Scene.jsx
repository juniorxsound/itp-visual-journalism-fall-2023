import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import SimpleBox from "./SimpleBox";
import SimpleCone from "./SimpleCone";
import SimpleThreejsObject from "./SimpleThreejsObject";
import SimpleGLTFAsset from "./SimpleGLTFAsset";

import { Suspense } from "react";

function Scene() {
  return (
    <section id="canvas_wrapper">
      <Canvas>
        {/* Camera 🎥 */}
        <PerspectiveCamera makeDefault position={[0, 2, 20]} />

        {/* Lights 💡 */}
        <ambientLight />
        <pointLight position={[0, 0, 5]} intensity={25} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["#E6FFF3"]} attach="background" />

        {/* Objects 📦 */}
        <SimpleBox position={[0, 2, 0]} scale={[2, 2, 2]} />
        <SimpleCone position={[-4, 2, 0]} scale={[1.5, 1.5, 1.5]} />
        <SimpleThreejsObject position={[4, 2, 0]} scale={[0.7, 0.7, 0.7]} />
        <Suspense fallback={null}>
          <SimpleGLTFAsset position={[0, 5, 0]} modelUrl={"/monkey.glb"} />
        </Suspense>

        {/* Many helpers come built in in three.js see further reads for more from three.js docs */}
        <gridHelper />
      </Canvas>
    </section>
  );
}

export default Scene;
