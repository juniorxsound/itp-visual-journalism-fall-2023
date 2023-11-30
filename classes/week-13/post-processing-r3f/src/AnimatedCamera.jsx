import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";

import { AnimationTimeline } from "./AnimationTimeline";

function AnimatedCamera() {
  const cameraRef = useRef();

  useEffect(() => {
    // Here we define the entire sequence of animations for the camera using GSAP
    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: -0.6,
        y: 0.5,
        z: 2,
      },
      "intro"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        y: -0.3,
      },
      "intro"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0.6,
      },
      "middle"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        y: 0.3,
      },
      "middle"
    );

    AnimationTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2.5,
        z: 10,
      },
      "outro"
    );

    AnimationTimeline.to(
      cameraRef.current.rotation,
      {
        y: 0,
      },
      "outro"
    );

    return () => CameraTimeline.kill();
  }, []);
  return (
    <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2.5, 10]} />
  );
}

export default AnimatedCamera;
