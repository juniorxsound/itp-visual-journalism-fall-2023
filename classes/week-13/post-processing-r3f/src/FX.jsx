import {
  EffectComposer,
  Bloom,
  Vignette,
  DepthOfField,
  Noise,
  Pixelation,
  Outline,
} from "@react-three/postprocessing";

/**
 * Looking for a list of possible effects and their props?
 * @see https://docs.pmnd.rs/react-postprocessing/introduction
 */
function FX() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.2} height={300} />
      <Noise opacity={0.02} />
      <Vignette offset={0.1} darkness={1.1} />
      <Pixelation granularity={10} />
    </EffectComposer>
  );
}

export default FX;
