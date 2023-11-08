import { useState } from "react";
import { Html } from "@react-three/drei";

function LocationMarker({ position, name }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <mesh
        onClick={() => {
          if (!isExpanded) setIsExpanded(true);
        }}
        onPointerLeave={() => {
          if (isExpanded) setIsExpanded(false);
        }}
        position={position}
      >
        {isExpanded && (
          <Html>
            <div
              style={{
                padding: "10px",
                background: "red",
                borderRadius: "5px",
                color: "white",
                minWidth: "200px",
              }}
            >
              <h1>{name}</h1>
              <p>
                {name} - here we can add more details dynamically from the data
                - or by stitching other data!
              </p>
            </div>
          </Html>
        )}
        <sphereGeometry args={[isExpanded ? 0.01 : 0.005]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
}

export default LocationMarker;
