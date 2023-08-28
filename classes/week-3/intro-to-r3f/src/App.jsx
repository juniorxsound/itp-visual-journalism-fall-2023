import Scene from "./Scene";

import SimpleSlide from "./SimpleSlide";

// We add a CSS file here so we can style components
import "./App.css";

function App() {
  return (
    <article id="article_wrapper">
      {/* HTML slides are nested here and we use vh values to specify where they are */}
      <SimpleSlide viewportPosition={50}>Hello from slide 1</SimpleSlide>
      <SimpleSlide viewportPosition={100}>Hello from slide 2</SimpleSlide>
      <SimpleSlide viewportPosition={200}>Hello from slide 3</SimpleSlide>
      <SimpleSlide viewportPosition={300}>Hello from slide 4</SimpleSlide>
      <SimpleSlide viewportPosition={550}>Hello from slide 5</SimpleSlide>

      {/* 3D scene container */}
      <Scene />
    </article>
  );
}

export default App;
