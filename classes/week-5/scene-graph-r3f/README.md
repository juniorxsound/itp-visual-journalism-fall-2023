# ITP Visual Journalism Fall 2023 - Scene Graph

This section will cover the basic idea of Scene Graph and scene graph transforms using React Three Fiber.

## Creating a planet

First off, we create a component that will represent our planet. We'll use a sphere geometry. We'll also add a texture to the material to make it look like a planet (See `src/SimplePlanet.jsx`).

## A planet with children planets

In order to support scene graph transforms, components must be able to take in children, in our case - our Planet is going to have multiple planets nested under it - each planet accumelating it's parent transforms (neat!).

## Using `Html` to place DOM elements in 3D space

The `Html` component from Drei is a utility component that allows us to place DOM elements that project into 3D space. This is useful for creating annotations and other UI elements that are not part of the 3D scene.

```jsx
return (
  <Html position={[0, 2, 0]}>
    <div>Hello from a div that follows a 3D point</div>
  </Html>
);
```

See `SimplePlanet.jsx` for an example of how to use this component.

## Putting everything together in the Scene

- We now have multiple planets that are nested under each other.
- Each planet rotates in it's local space (accumelating it's parent's rotation, scale and position).
- Each planet also has it's own marker in local space, enabling us to track the 3D object with a label
