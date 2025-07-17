import { useGLTF, Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const TechIcon = ({ model }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);//for mobile width
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load 3D model for non-mobile devices
  const scene = !isMobile ? useGLTF(model.modelPath) : null;

  return (
    <>
      <style>
        {`
          .float-animation {
            animation: float 4s ease-in-out infinite;
            width: 100%;
            height: 100%;
            max-width: 100px; 
            max-height: 100px;
            object-fit: contain;
            will-change: transform; 
          }
          @keyframes float {
            0% {
              transform: translate(0, 0) scale(0.5);
            }
            25% {
              transform: translate(7px, -6px) scale(0.5); 
            }
            50% {
              transform: translate(-8px, 6px) scale(0.6);
            }
            75% {
              transform: translate(7px, -6px) scale(0.7);
            }
            100% {
              transform: translate(0, 0) scale(0.8);
            }
          }
        `}
      </style>
      {isMobile ? (
        <img
          src={model.imgPath}
          alt={model.name}
          className="float-animation"
        />
      ) : (
        <Canvas>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
              <primitive object={scene.scene} />
            </group>
          </Float>
        </Canvas>
      )}
    </>
  );
};

export default TechIcon;