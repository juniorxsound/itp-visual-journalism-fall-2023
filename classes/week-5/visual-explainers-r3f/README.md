# ITP Visual Journalism Fall 2023 - Visual Explainers

This section will cover the basics of creating visual explainers using React Three Fiber.

## Loading in a model

We use the `useGLTF` hook from Drei from week 3 to load in a model (see `StatueGLTFObject.jsx`)

> Model thanks to https://www.myminifactory.com/object/3d-print-townley-discobolus-the-discus-thrower-25156

Lights are used in `Scene.jsx` to illuminate the model.

## Using `Html` to place DOM elements in 3D space

The `Html` component from Drei is a utility component that allows us to place DOM elements that project into 3D space. This is useful for creating annotations and other UI elements that are not part of the 3D scene.

```jsx
return (
  <Html position={[0, 2, 0]}>
    <div>Hello from a div that follows a 3D point</div>
  </Html>
);
```

See `StatueGLTFObject.jsx` for an example of how to use this component.

## Animation...

We include `gasp` in the project to be able to build a sequence of animations, which we then tie into the user's scroll position for playback. (see `AnimatedCamera.jsx`)

- First, we create a `CameraTimeline` object that will hold the camera's animation sequence. (note how we set it to `paused: true` so that it doesn't play back automatically)
- We then create an `AnimatedCamera` component that returns the `<PerspectiveCamera />` we were using before, but keeps a ref for the camera
- in a `useEffect` that triggers when the component mounts - we build the camera animation timeline

```js
/**
 * We register .to animations on the timeline and it constructs the sequence for us. If we wanted two animation to happen parrallely, we'd use the same animationLabel
 **/
CameraTimeline.to(
  objectThatAnimates,
  {
    animationKey: newValue,
  },
  "animationLabel"
);
```

- Lastly, in `App.jsx` we import the `CameraTimeline` and in a `useEffect` we register a scroll callback that updates the timeline based on the user's scroll position.
