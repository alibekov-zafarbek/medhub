import React, { Suspense, useRef } from 'react'

import {
  useGLTF,
  ContactShadows,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { Html, useProgress } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { Brain } from "../../common/Brain";
// import { Brain } from "../../common/Brain2";
import { Model } from "../../common/Digestive_system";
// import GLTFLoader from "three-gltf-loader";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};
export default function Atlas() {
  return (
    <div className='mt-5' style={{marginTop: "300px"}}>

    <Canvas
                style={{
                  height: "100vh",
                  width: "100vw",
                  marginTop: "50px"
                }}
                // shadows
                frameloop="demand"
                dpr={[1, 2]}
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 500,
                  position: [-4, 3, 6],
                }}
                
              >
                <Suspense fallback={<Loader />}>
                  <hemisphereLight intensity={0.15} groundColor="black" />
                  {/* <pointLight intensity={2} /> */}

                  <spotLight
                    intensity={1}
                    angle={0.1}
                    penumbra={1}
                    position={[35, -31, 70]}
                    castShadow
                  />
                  <spotLight
                    position={[110, -13, -33]}
                    angle={0.1}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    // shadow-mapSize={1024}
                  />
                  <spotLight
                    // position={color1}

                    position={[-107, 41, -12]}
                    angle={0.1}
                    penumbra={1}
                    intensity={1}
                    castShadow
                    // shadow-mapSize={1024}
                  />

                  <OrbitControls
                    rotateSpeed={1.2}
                    setAzimuthalAngle={0.5}
                    enableZoom={true}
                    zoomSpeed={2}
                    minDistance={4}
                    maxDistance={20}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI - Math.PI / 3}
                    // minAzimuthAngle={-Math.PI / 4}
                    // maxAzimuthAngle={Math.PI / 4}
                  />
                  {/* <Brain /> */}
                  <Model />
                  {/* <Model /> */}

                  <Preload all />
                </Suspense>
              </Canvas>
    </div>
  )
}
