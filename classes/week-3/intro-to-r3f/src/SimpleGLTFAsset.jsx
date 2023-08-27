import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function SimpleGLTFAsset(props) {
  const modelRef = useRef();
  const { position, scale, modelUrl } = props;

  const gltf = useGLTF(modelUrl);

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <primitive
      ref={modelRef}
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      object={gltf.scene}
    />
  );
}

export default SimpleGLTFAsset;
