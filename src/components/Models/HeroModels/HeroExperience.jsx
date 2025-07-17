import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroLights from "../HeroModels/Herolight";
import Partical from "./Partical";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Animegirl";
import ErrorBoundary from "../HeroModels/ErrorBoundary"; 

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const fallbackImage = (
    <div style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <style>
       {`.profile {width: "80%";
       maxWidth: "400px"; borderRadius: "50%";
        transform: "translatey(0px)";
        animation: "float 6s ease-in-out infinite";}
        @keyframes float {
          0 % {

            transform: translatey(0px);
          }
  50% {

          transform: translatey(-20px);
  }
        100% {

          transform: translatey(0px);
       }}
  `}
      </style>

      <img src="/assets/images/profile.png" alt="Character fallback" className="profile" />

    </div>
  );

  return (
    <ErrorBoundary fallback={isMobile ? fallbackImage : null}>
      <Suspense fallback={isMobile ? fallbackImage : null}>
        <Canvas camera={{ position: isMobile ? [0, 0, 20] : [0, 0, 15], fov: 45 }}>
          <OrbitControls
            enablePan={false}
            maxDistance={10}
            minDistance={2.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />

          <HeroLights />
          <Partical count={isMobile ? 50 : 150} />

          <group
            scale={isMobile ? 0.7 : 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          />
          <Model />

        </Canvas>
      </Suspense>
    </ErrorBoundary>
  );
};

export default HeroExperience;
