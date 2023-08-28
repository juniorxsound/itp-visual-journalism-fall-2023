import { useEffect } from "react";

import Scene from "./Scene";
import SimpleSlide from "./SimpleSlide";
import { CameraTimeline } from "./AnimatedCamera";

// We add a CSS file here so we can style components
import "./App.css";

function getScrollProgress() {
  // This will calculate how many pixels the page is vertically
  const winScroll = window.document.documentElement.scrollTop;

  // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  // This will calculate the final total of the percentage of how much the user has scrolled (0-1)
  return winScroll / height;
}

function App() {
  // Set the animation to play based on scroll position
  useEffect(() => {
    // We then register a callback that executes every time the user scrolls
    window.onscroll = (e) => {
      const scrolled = getScrollProgress();

      // console.log(`Scroll progress: ${progress}`);
      CameraTimeline.progress(scrolled);

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
