

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('assets/models/animegirl.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['tripo_mat_d3025a2b-5c71-4195-a907-b19f12656e3d']} />
    </group>
  )
}

useGLTF.preload('assets/models/animegirl.glb')
