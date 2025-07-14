import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* ambient light for overall illumination */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={100}
      color="white"
    />
    {/* main light for character */}
    <spotLight
      position={[6, 2, 7]}
      angle={0.5}
      penumbra={0.5}
      intensity={90}
      color="white"
    />
    {/* purplish side fill */}
    <spotLight
      position={[-3, 5, 9]}
      angle={0.9}
      penumbra={1}
      intensity={60}
      color="purple"
    />
    {/* area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#", 8, 3, 2)}
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      intensity={15}
    />
    {/* subtle point light for atmospheric tone */}
    <pointLight position={[0, 1, 0]} intensity={20} color="#4fbcff" />
    <pointLight position={[1, 2, -2]} intensity={10} color="#3b2ff" />
  </>
);

export default HeroLights;