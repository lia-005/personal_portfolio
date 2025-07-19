import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { Computer } from "./Computer";

const ContactExperience = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device based on window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Consistent with TechIcon.jsx
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <style>
            {`
              .float-animation {
              background:transparent;
                animation: float 4s ease-in-out infinite;
                width: 100%;
                max-width: 150px; 
                max-height: 150px;
                object-fit: contain;
                will-change: transform;
              }
              @keyframes float {
                0% {
                  transform: translate(-12, 0) scale(0.5);
                }
                25% {
                  transform: translate(12px, -0px) scale(0.7);
                }
                50% {
                  transform: translate(-12px, 0px) scale(0.5);
                }
                75% {
                  transform: translate(12px, -0px) scale(0.7);
                }
                100% {
                  transform: translate(-12, 0) scale(0.5);
                }
              }
              .stay-connected {
                margin-top: 1rem;
                font-size: 1rem;
                color: #ffffff; /* White text for contrast on #cd7c2e background */
                text-align: center;
                font-weight: 500;
              }
            `}
          </style>
          <img 
            src="/assets/images/avatar.png"
            alt="Contact Avatar"
            className="float-animation"
          />
          <p className="stay-connected">Stay Connected</p>
        </div>
      ) : (
        <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
          <ambientLight intensity={0.5} color="#fff4e6" />
          <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
          <directionalLight
            position={[5, 9, 1]}
            castShadow
            intensity={2.5}
            color="#ffd9b3"
          />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />
          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial color="#a46b2d" />
            </mesh>
          </group>
          <group scale={0.03} position={[0, -1.49, -2]} castShadow>
            <Computer />
          </group>
          <group scale={[1, 1, 1]}>
            <mesh receiveShadow position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#a46b2d" />
            </mesh>
          </group>
        </Canvas>
      )}
    </>
  );
};

export default ContactExperience;