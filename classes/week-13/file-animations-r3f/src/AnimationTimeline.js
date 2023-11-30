import { gsap } from "gsap";

export const AnimationTimeline = gsap.timeline({
  paused: true, // We set this here so we can adjust progress tied to scroll
});
