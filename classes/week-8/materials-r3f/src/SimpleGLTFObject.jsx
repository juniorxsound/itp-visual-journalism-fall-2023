import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function SimpleGLTFObject(props) {
  const { position, scale, modelUrl, material } = props;

  const gltf = useGLTF(modelUrl);
  const scene = gltf.scene.clone();

  const modelRef = useRef();
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  useEffect(() => {
    if (material) {
      scene.traverse((child) => {
        if (child instanceof Mesh) {
          if (child.material.map) material.map = child.material.map.clone();
          child.material = material;
        }
      });
    }
  }, [scene, material]);

  return (
    <primitive
      ref={modelRef}
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [1, 1, 1]}
      object={scene}
    />
  );
}

export default SimpleGLTFObject;
