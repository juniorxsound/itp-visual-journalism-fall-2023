import { useEffect } from "react";

import Scene from "./Scene";
import SimpleSlide from "./SimpleSlide";
import { CameraTimeline } from "./AnimatedCamera";

// We add a CSS file here so we can style components
import "./App.css";

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    window.onscroll = (e) => {
      const progress = e.target.scrollingElement.scrollTop / 4000;
      // console.log(`Scroll progress: ${progress}`);
      CameraTimeline.progress(progress);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <div id="article_wrapper">
      {/* HTML slides are nested here and we use vh values to specify where they are */}
      <SimpleSlide viewportPosition={50}>Hello from slide 1</SimpleSlide>
      <SimpleSlide viewportPosition={100}>Hello from slide 2</SimpleSlide>
      <SimpleSlide viewportPosition={200}>Hello from slide 3</SimpleSlide>
      <SimpleSlide viewportPosition={300}>Hello from slide 4</SimpleSlide>
      <SimpleSlide viewportPosition={550}>Hello from slide 5</SimpleSlide>
      {/* 3D scene container */}
      <Scene />
    </div>
  );
}

export default App;
