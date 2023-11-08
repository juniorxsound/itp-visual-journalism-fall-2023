import { useTexture } from "@react-three/drei";

function Earth() {
  const earthTexture = useTexture("/earth.jpg");
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
}

export default Earth;
