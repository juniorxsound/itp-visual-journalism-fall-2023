import Scene from "./Scene";
import SimpleSlide from "./SimpleSlide";
// We add a CSS file here so we can style components
import "./App.css";

function App() {
  return (
    <article id="article_wrapper">
      {/* 3D scene container */}
      <Scene />
    </article>
  );
}

export default App;
