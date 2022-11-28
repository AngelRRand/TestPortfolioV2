import React from 'react'
import { motion } from "framer-motion";
import { currentRouter } from '../interface/types';

const PhotoNutria: React.FC<currentRouter> = ({currentRouter}) => {
  return (
    <motion.div
      className='container_perfil rigth_perfil'
      initial={{ opacity: 1 }}
      animate={{
        opacity: currentRouter === '/Dream' ? 0 : 1,
        transition: { duration: 3.5, type: "spring" },
      }}
    >
      <img
        src={currentRouter === '/House' ? nutriaSinCasco : currentRouter === '/Art' ? nutriaSinCasco : nutria}
        alt=""
        className='img_perfil ' />
      <h2>Nutria</h2>
    </motion.div>
  )
}

export default PhotoNutria