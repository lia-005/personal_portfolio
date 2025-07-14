

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('./assets/public/models/anime_girl_character.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['tripo_mat_d3025a2b-5c71-4195-a907-b19f12656e3d']} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['tripo_mat_d3025a2b-5c71-4195-a907-b19f12656e3d']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['tripo_mat_d3025a2b-5c71-4195-a907-b19f12656e3d']} />
    </group>
  )
}

useGLTF.preload('./assets/public/models/anime_girl_character.glb')
