import { useRef, useState } from "react";

function MyRefComponent() {
  const inputFieldRef = useRef();

  // useState can store any value - e.g a string, an object...
  const [someState, setSomeState] = useState({
    name: "ITP Visual Journalism",
    someOtherValue: 5,
  });

  return (
    <>
      {/* Refs allow us to gain access to the `.value` of this input field once a user clicks submit input so we can change the state value reactively */}
      <input type="text" ref={inputFieldRef} defaultValue={someState.name} />
      <input
        type="submit"
        onClick={() =>
          // We have to combine
          setSomeState({
            name: inputFieldRef.current.value,
          })
        }
      />
      <div>
        Example of using state with an object and adding the value -{" "}
        {someState.name}
      </div>
    </>
  );
}

export default MyRefComponent;
