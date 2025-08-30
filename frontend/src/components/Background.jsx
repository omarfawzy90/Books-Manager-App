import React from "react";
import LightRays from "./LightRays";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-slate-300">
      <div className="absolute inset-0 z-10">
        <LightRays
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
