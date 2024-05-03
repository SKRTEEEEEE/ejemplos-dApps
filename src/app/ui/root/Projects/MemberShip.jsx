import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Laptop } from '../../three-models/Laptop';


export const MemberShip = () => {
  return (
   
      <Canvas>
        <Laptop scale={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={9} />
        <ambientLight intensity={5} />
        <directionalLight position={[3, 2, 1]} />
      </Canvas>
 
  );
};
