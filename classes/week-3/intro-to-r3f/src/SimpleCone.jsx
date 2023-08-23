import { useRef, useState } from "react";
import { Cone } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";

function SimpleCone(props) {
  const coneRef = useRef();
  const { position, scale } = props;
  const [rotationSpeed, setRotationSpeed] = useState(-0.01);

  // useFrame executs on each rendered frame, so it's a good place to animate
  useFrame(() => {
    coneRef.current.rotation.x += rotationSpeed;
    coneRef.current.rotation.y -= rotationSpeed;
    coneRef.current.rotation.z += rotationSpeed;
  });

  return (
    <Cone
      ref={coneRef}
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      args={[1, 1]}
      material={new MeshPhysicalMaterial()}
    />
  );
}

export default SimpleCone;
