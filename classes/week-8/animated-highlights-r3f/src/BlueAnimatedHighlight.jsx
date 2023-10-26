import { useEffect, useRef } from "react";

import { AnimationTimeline } from "./AnimationTimeline";

function BlueAnimatedHighlight() {
  const highlightRef = useRef();

  // Effect where we write the animation to play along with the camera
  useEffect(() => {
    AnimationTimeline.to(
      highlightRef.current.material,
      {
        opacity: 0.5,
      },
      "middle"
    );

    AnimationTimeline.to(
      highlightRef.current.material,
      {
        opacity: 0,
      },
      "outro"
    );
  }, [highlightRef]);

  return (
    <mesh
      ref={highlightRef}
      scale={[4, 2, 1]}
      position={[0.5, 0.01, 0.5]}
      rotation={[-Math.PI / 2, 0, Math.PI / 4]}
    >
      <planeGeometry />
      <meshBasicMaterial transparent opacity={0} color="blue" />
    </mesh>
  );
}

export default BlueAnimatedHighlight;
