import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CyberOrb } from '../../three-models/CyberOrb';


export const Marketing = () => {
  return (
      <Canvas>
        <CyberOrb scale={1.2} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={5} />
        <directionalLight position={[7, 2, 1]} />
      </Canvas>

  );
};
