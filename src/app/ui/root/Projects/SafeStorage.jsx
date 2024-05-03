import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Desktop } from '../../three-models/Desktop';



export const SafeStorage = () => {
  return (
    
      <Canvas>
        <Desktop scale={0.3} />
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={5} />
        <directionalLight position={[7, 2, 1]} />
      </Canvas>

      
  );
};
