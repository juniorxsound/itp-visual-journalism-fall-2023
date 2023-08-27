import { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Marker(props) {
  const { children, position } = props;
  return (
    <Html style={{ color: "white" }} position={position}>
      {children}
    </Html>
  );
}

function StatueGLTFObject(props) {
  const modelRef = useRef();
  const { position, scale, modelUrl } = props;

  const gltf = useGLTF(modelUrl);

  return (
    <primitive
      ref={modelRef}
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      object={gltf.scene}
    >
      {/* Each of these markers maps an HTML element onto a point in 3D space */}
      <Marker position={[1, 4, 0]}>Head</Marker>
      <Marker position={[1, 0, 0]}>Base</Marker>
      <Marker position={[-1, 3.3, 0.3]}>Disc</Marker>
    </primitive>
  );
}

export default StatueGLTFObject;
