/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 brain.glb
Author: farhad.Guli (https://sketchfab.com/farhad.Guli)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/brain-6ca0844a846b400695ff54553dc9bda4
Title: Brain
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { proxy } from "valtio";
import { useState } from "react";
// import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#000",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/brain/brain.glb");
  const [hovered, set] = useState(null);
  const [color1, setColor] = useState("#d56658")

  const texture = useTexture("/brain/textures/material_0_diffuse.png");

console.log(props.position1);
  return (
    <group
      ref={ref}
      {...props}
      scale={0.5}
      position={0 }
    
      onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
      onPointerOut={(e) => e.intersections.length === 0 && set(null)}
      onPointerMissed={() => (state.current = null)}
      onClick={(e) => (
        e.stopPropagation(), console.log(e.object.material.name)
      )}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Material2.geometry} position={[-1.09, 1.65, 0]}>
          <meshStandardMaterial
            map={texture}
            // color={color1}
            // {...colorprops}
          />
        </mesh>
        <mesh
          geometry={nodes.Material2_1.geometry}
          // material={materials.material}
          position={[-1.09, 1.65, 0]}
        >
          <meshStandardMaterial
            map={texture}
            // color={color1}
            // {...colorprops}
          />
        </mesh>
        <group position={[-1.09, 1.65, 0]}>
          <mesh
            geometry={nodes.Material2_2.geometry}
            // material={materials.material}
          >
            <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </mesh>
          <lineSegments
            geometry={nodes.Material2_3.geometry}
            // material={materials.edge_color808080255}
          >
            {" "}
            <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </lineSegments>
        </group>
        <mesh
          geometry={nodes.Material2_4.geometry}
          // material={materials.material}
          position={[-1.09, 1.65, 0]}
        >
          <meshStandardMaterial
            // map={colorMap}
            color={color1}
            // {...TextureProps}
          />
        </mesh>
        <mesh
          geometry={nodes.Material2_5.geometry}
          // material={materials.material}
          position={[-1.09, 1.65, 0]}
        >
          <meshStandardMaterial
            // map={colorMap}
            color={color1}
            // {...TextureProps}
          />
        </mesh>
        <group position={[-1.09, 1.65, 0]}>
          <mesh
            geometry={nodes.Material2_6.geometry}
            // material={materials.material}
          >
          <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </mesh>
          <lineSegments
            geometry={nodes.Material2_7.geometry}
            // material={materials.edge_color808080255}
          >
            <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </lineSegments>
        </group>
        <mesh
          geometry={nodes.Material2_8.geometry}
          // material={materials.material}
          position={[-1.09, 1.65, 0]}
        >
         <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
        </mesh>
        <group position={[-1.09, 1.65, 0]}>
          <mesh
            geometry={nodes.Material2_9.geometry}
            // material={materials.Color_A06}
          >
           <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </mesh>
          <lineSegments
            geometry={nodes.Material2_10.geometry}
            // material={materials.edge_color20400255}
          >
           <meshStandardMaterial
              // map={colorMap}
              // {...colorprops}
              color={color1}
            />
          </lineSegments>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/brain/brain.glb");
