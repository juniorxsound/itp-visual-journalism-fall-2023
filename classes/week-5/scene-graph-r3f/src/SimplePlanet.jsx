import { useRef } from "react";
import { Sphere, useTexture, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Marker(props) {
  const { label } = props;
  return (
    <Html>
      <div className="label">{label}</div>
    </Html>
  );
}

function SimplePlanet(props) {
  const planetRef = useRef();

  // We pass down the path to the texture as a prop
  const { label, planetTexturePath, position, scale, rotationSpeed, children } =
    props;

  // Load the texture from the planetTexturePath prop passed to the component
  const texture = useTexture(planetTexturePath);

  useFrame(() => {
    // We can access the mesh of the planet using the planetRef
    planetRef.current.rotation.x += rotationSpeed;
    planetRef.current.rotation.y += rotationSpeed;
    planetRef.current.rotation.z += rotationSpeed;
  });

  return (
    <Sphere
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      material-map={texture}
      ref={planetRef}
    >
      {/* Each planet gets a child marker nested inside of it so it moves together with the 3D object */}
      <Marker label={label} />

      {/* We nest the children of the component inside the Sphere component so we can enable scene graph transforms */}
      {children}
    </Sphere>
  );
}

export default SimplePlanet;
