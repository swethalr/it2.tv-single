"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

// TopoJSON file containing world map data
const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// Coordinates are strictly [Longitude, Latitude]
const centerNode = { coordinates: [78, 22] as [number, number] }; // Approx. Egypt/Middle East

// Coordinates for the peripheral nodes seen in your video
const peripheralNodes = [
  { coordinates: [-40, 72] as [number, number] },  // Greenland
  { coordinates: [-70, 45] as [number, number] }, // North America Central
  { coordinates: [-100, 45] as [number, number] }, // North America West
  { coordinates: [-50, -10] as [number, number] }, // South America
  { coordinates: [10, 50] as [number, number] },   // Europe
  { coordinates: [32, 27] as [number, number] },   // India
  { coordinates: [100, 50] as [number, number] },  // East Asia
  { coordinates: [135, -25] as [number, number] }, // Australia
];

export default function NetworkMap() {
  return (
    <div className="w-full max-w-5xl mx-auto flex items-center justify-center lg:p-4">
      <ComposableMap
        projectionConfig={{ scale: 140 }}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      >
        {/* Render the Base World Map */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#F0F1F3" // Light grey map color
                stroke="#D1D5DB" // Slightly darker borders
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Render the Dashed Connecting Lines */}
        {peripheralNodes.map((node, index) => (
          <Line
            key={`line-${index}`}
            from={centerNode.coordinates}
            to={node.coordinates}
            stroke="#9CA3AF" // Gray dashed lines
            strokeWidth={1}
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
        ))}

        {/* Render Peripheral Node Markers */}
        {peripheralNodes.map((node, index) => (
          <Marker key={`marker-${index}`} coordinates={node.coordinates}>
            <circle r={6} fill="#374151" /> {/* Outer dark circle */}
            <circle r={2} fill="#F3F4F6" /> {/* Inner light dot */}
          </Marker>
        ))}

        {/* Render Center Node Marker (Rendered last so it sits on top of lines) */}
        <Marker coordinates={centerNode.coordinates}>
          <circle r={7} fill="#ac1717" />
          <circle r={2.5} fill="#F3F4F6" />
        </Marker>
      </ComposableMap>
    </div>
  );
}