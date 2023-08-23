import { useEffect } from "react";

function MyEffectComponent(props) {
  // We destructre the props objects so the way this component would be called is <MyEffectComponent someNumber={10} />
  const { someNumber } = props;

  // An effect that depends on a value change in this case it's `someNumber`
  useEffect(() => {
    alert(
      `Some number was changed and the effect was triggered because it depends on it - value is ${someNumber}`
    );
  }, [someNumber]);

  // An effect that triggers when the component mounts
  useEffect(() => {
    alert(`This component just mounted and the effect was triggered ONCE`);

    // Each effect returns a cleanup function, not super useful in this example but can be used to removeEventListeners or do any additional work needed once the component unmounts
    return () => {};
  }, []);

  // Each component must have a return function that returns JSX, null is also possible for components that just run functionality but it needs to return it
  return null;
}

export default MyEffectComponent;
