import { Canvas } from "@react-three/fiber";
import { Stars, PerspectiveCamera } from "@react-three/drei";

import SimplePlanet from "./SimplePlanet";

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas>
        {/* Camera 🎥 */}
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />

        {/* Lights 💡 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[1, 3, 2]} intensity={5} />

        {/* Fun star background */}
        <Stars />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["black"]} attach="background" />

        {/* Our planets 🪐 - First up is our parent planet*/}
        <SimplePlanet
          label={"Parent Planet 🪐"}
          rotationSpeed={0.001}
          planetTexturePath="/2k_mercury.jpg"
        >
          {/* First child planet */}
          <SimplePlanet
            label={"First Child Planet 🪐"}
            scale={[0.5, 0.5, 0.5]}
            rotationSpeed={0.005}
            position={[0, 3, 0]}
            planetTexturePath="/2k_venus_surface.jpg"
          >
            {/* Second child planet */}
            <SimplePlanet
              label={"Second Child Planet 🪐"}
              scale={[0.5, 0.5, 0.5]}
              rotationSpeed={0.01}
              position={[0, 3, 0]}
              planetTexturePath="/2k_saturn.jpg"
            />
          </SimplePlanet>
        </SimplePlanet>
      </Canvas>
    </div>
  );
}

export default Scene;
