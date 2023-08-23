import MyEffectComponent from "./MyEffectComponent";
import MyRefComponent from "./MyRefComponent";

import { useState } from "react";

function MyStateComponent() {
  // We use the useState hook to mutate state which returns const [state, stateSetter] = ...
  const [counter, setCounter] = useState(0);

  // Each component must have a return function that returns JSX
  return (
    <section>
      <h1>Hello world state</h1>
      <div>Count is: {counter}</div>
      <input
        onClick={() => setCounter((value) => value + 1)}
        type="button"
        value={"Click to increment"}
      />

      {/* elements can have style tags where CSS in camelCase values can be written inline */}
      <div
        style={{
          paddingTop: "20px",
        }}
      />
      <MyRefComponent />
      <MyEffectComponent someNumber={counter} />
    </section>
  );
}

export default MyStateComponent;
