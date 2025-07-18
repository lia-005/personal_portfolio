import { Canvas } from "@react-three/fiber";
import HeroLights from "../HeroModels/Herolight";
import Partical from "./Partical";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Animegirl";


const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });



  return (


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
    
  );
};

export default HeroExperience;
