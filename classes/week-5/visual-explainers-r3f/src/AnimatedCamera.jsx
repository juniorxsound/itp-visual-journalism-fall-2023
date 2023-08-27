import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";

export const CameraTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
});

function AnimatedCamera(props) {
  const cameraRef = useRef();

  useEffect(() => {
    // Here we define the entire sequence of animations for the camera using GSAP
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 1,
        y: 3,
        z: 3,
        duration: 0.1,
      },
      "head"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -1.3,
        y: 3.5,
        z: 3,
        duration: 0.1,
      },
      "disc"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 0.5,
        y: 0,
        z: 6,
        duration: 0.1,
      },
      "base"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 0,
        y: 2,
        z: 8,
        duration: 0.1,
      },
      "outro"
    );

    return () => CameraTimeline.kill();
  }, []);
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} />;
}

export default AnimatedCamera;
