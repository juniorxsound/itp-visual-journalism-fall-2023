import { useEffect, useState } from "react";
import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import LocationMarker from "./LocationMarker";
import Earth from "./Earth";

// This function converts geographic coordinates (latitude and longitude) into a 3D vector.
function latLongToVector3(lat, lon, radius) {
  // Convert latitude and longitude from degrees to radians
  const phi = (lat * Math.PI) / 180;
  const theta = ((lon - 180) * Math.PI) / 180;

  // Calculate the x, y, and z coordinates using the spherical to Cartesian coordinates conversion formulas
  const x = -(radius * Math.cos(phi) * Math.cos(theta));
  const y = radius * Math.sin(phi);
  const z = radius * Math.cos(phi) * Math.sin(theta);

  return new Vector3(x, y, z);
}

function Scene() {
  // We use state to store our data points
  const [dataPoints, setDataPoints] = useState([]);

  // We fetch our data and do any pre-processing needed to organize it
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/eesur/country-codes-lat-long/master/country-codes-lat-long-alpha3.json"
    ).then((res) => {
      res.json().then((data) => {
        const { ref_country_codes } = data;

        const filteredData = ref_country_codes.filter(
          (item) => item.latitude && item.longitude
        );
        const mappedData = filteredData.map(
          ({ longitude, latitude, country }) => {
            return {
              position: latLongToVector3(latitude, longitude, 1),
              name: country,
            };
          }
        );
        setDataPoints(mappedData);
      });
    });
  }, []);

  return (
    <div id="canvas_wrapper">
      <Canvas>
        <PerspectiveCamera position={[0, 0, 3]} makeDefault near={0.0001} />
        <OrbitControls />

        <Environment preset="sunset" resolution={256} background blur={1} />
        <color args={["black"]} attach="background" />

        {/* Lights 💡 */}
        <ambientLight intensity={0.5} color="white" />
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />

        <Earth />

        {/* Data points turned into geometry with it's own interaction 📌 */}
        {dataPoints.map((item, index) => (
          <LocationMarker
            key={index}
            position={item.position}
            name={item.name}
          />
        ))}
      </Canvas>
    </div>
  );
}

export default Scene;
