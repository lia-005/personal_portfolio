import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* soft ambient */}
    <ambientLight intensity={0.5} />

    {/* main spots */}
    <spotLight position={[2, 5, 6]} angle={0.2} penumbra={0.5} intensity={2} />
    <spotLight position={[6, 2, 7]} angle={0.4} penumbra={0.5} intensity={2} />
    <spotLight position={[-3, 5, 9]} angle={0.7} penumbra={1} intensity={1.5} color="purple" />

    {/* subtle point lights */}
    <pointLight position={[0, 1, 0]} intensity={0.5} color="#4fbcff" />
    <pointLight position={[1, 2, -2]} intensity={0.3} color="#3b2fff" />
  </>
);


export default HeroLights;