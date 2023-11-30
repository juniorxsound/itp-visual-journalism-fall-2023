import { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function InfiniteAnimatedModel(props) {
  const { modelUrl, position } = props;

  const { scene, animations } = useGLTF(modelUrl);
  const { actions } = useAnimations(animations, scene);
  const firstAnimationClip = Object.values(actions)[0];

  // Set the animation to play based on scroll position
  useEffect(() => {
    // We set the animation to play and pause it
    firstAnimationClip.play();
  }, [actions]);

  return <primitive position={position} object={scene} />;
}

export default InfiniteAnimatedModel;
