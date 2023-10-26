import { useEffect, useRef } from "react";

import { AnimationTimeline } from "./AnimationTimeline";

function OrangeAnimatedHighlight() {
  const highlightRef = useRef();

  // Effect where we write the animation to play along with the camera
  useEffect(() => {
    AnimationTimeline.to(
      highlightRef.current.material,
      {
        opacity: 0.5,
      },
      "intro"
    );

    AnimationTimeline.to(
      highlightRef.current.material,
      {
        opacity: 0,
      },
      "middle"
    );
  }, [highlightRef]);

  return (
    <mesh
      ref={highlightRef}
      scale={[4, 1, 1]}
      position={[-1, 0.01, -1]}
      rotation={[-Math.PI / 2, 0, Math.PI / 4]}
    >
      <planeGeometry />
      <meshBasicMaterial transparent opacity={0} color="orange" />
    </mesh>
  );
}

export default OrangeAnimatedHighlight;
