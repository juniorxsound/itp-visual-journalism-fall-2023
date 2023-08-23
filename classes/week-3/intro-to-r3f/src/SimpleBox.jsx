import { useRef, useState } from "react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";

function SimpleBox(props) {
  const boxRef = useRef();
  const { position, scale } = props;
  const [rotationSpeed, setRotationSpeed] = useState(0.01);

  // useFrame executs on each rendered frame, so it's a good place to animate
  useFrame(() => {
    boxRef.current.rotation.x += rotationSpeed;
    boxRef.current.rotation.y -= rotationSpeed;
    boxRef.current.rotation.z += rotationSpeed;
  });

  return (
    <Box
      ref={boxRef}
      position={position ? position : [0, 0, 0]}
      args={scale ? scale : [1, 1, 1]}
      material={new MeshPhysicalMaterial()}
    />
  );
}

export default SimpleBox;
