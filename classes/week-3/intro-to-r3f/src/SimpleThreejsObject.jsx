import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";

function SimpleThreejsObject(props) {
  const objectRef = useRef();
  const { position, scale } = props;
  const [rotationSpeed, setRotationSpeed] = useState(-0.01);

  // useFrame executs on each rendered frame, so it's a good place to animate
  useFrame(() => {
    objectRef.current.rotation.x -= rotationSpeed;
    objectRef.current.rotation.y -= rotationSpeed;
    objectRef.current.rotation.z += rotationSpeed;
  });

  return (
    <mesh
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      ref={objectRef}
    >
      <tubeGeometry />
      <meshPhysicalMaterial side={DoubleSide} />
    </mesh>
  );
}

export default SimpleThreejsObject;
