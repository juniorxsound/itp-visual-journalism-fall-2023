import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function RotateChildren(props) {
  const groupRef = useRef();
  const { children } = props;
  const [rotationSpeed, setRotationSpeed] = useState(-0.01);

  // useFrame executs on each rendered frame, so it's a good place to animate
  useFrame(() => {
    groupRef.current.rotation.y -= rotationSpeed;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default RotateChildren;
