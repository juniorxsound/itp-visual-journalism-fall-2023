import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls, Scroll } from "@react-three/drei";

import SimpleBox from "./SimpleBox";
import SimpleCone from "./SimpleCone";
import SimpleThreejsObject from "./SimpleThreejsObject";
import SimpleGLTFAsset from "./SimpleGLTFAsset";

import SimpleSlide from "./SimpleSlide";

function Scene() {
  return (
    <section id="canvas_wrapper">
      <Canvas>
        <ScrollControls pages={6} damping={0}>
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
          <SimpleGLTFAsset position={[0, 5, 0]} modelUrl={"/monkey.glb"} />

          {/* Many helpers come built in in three.js see further reads for more from three.js docs */}
          <gridHelper />

          {/* HTML slides are nested here and we use vh values to specify where they are */}
          <Scroll html>
            <SimpleSlide viewportPosition={50}>Hello from slide 1</SimpleSlide>
            <SimpleSlide viewportPosition={100}>Hello from slide 2</SimpleSlide>
            <SimpleSlide viewportPosition={200}>Hello from slide 3</SimpleSlide>
            <SimpleSlide viewportPosition={300}>Hello from slide 4</SimpleSlide>
            <SimpleSlide viewportPosition={550}>Hello from slide 5</SimpleSlide>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </section>
  );
}

export default Scene;
