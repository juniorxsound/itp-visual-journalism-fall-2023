import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import useScrollProgress from "./useScrollProgress";

function ScrollTiedAnimatedModel(props) {
  const { modelUrl, position } = props;

  const progress = useScrollProgress();

  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, scene);
  const firstAnimationClip = Object.values(actions)[0];

  useEffect(() => {
    // Animation progress is set in seconds, so we multiply progress (0-1 progress) by the clip's duration
    firstAnimationClip.time = firstAnimationClip.getClip().duration * progress;
  }, [progress, actions]);

  // Set the animation to play based on scroll position
  useEffect(() => {
    // We set the animation to play and pause it
    firstAnimationClip.reset().play().paused = true;
  }, [actions]);

  return <primitive position={position} object={scene} />;
}

export default ScrollTiedAnimatedModel;
