import nutria from '../assets/NavBotton/nutria.gif';
import nutriaSinCasco from '../assets/NavBotton/nutriaSinCasco.gif';

import Image from 'next/image'

import { motion } from "framer-motion";
import { currentRouter } from '../interface/types';

const PhotoNutria: React.FC<currentRouter> = ({ currentRouter }) => {
  return (
    <motion.div
      className='container_perfil rigth_perfil'
      initial={{ opacity: 1 }}
      animate={{
        opacity: currentRouter === '/Dream' ? 0 : 1,
        transition: { duration: 3.5, type: "spring" },
      }}
    >
      
      <Image
        src={currentRouter === '/House' ? nutriaSinCasco : currentRouter === '/Art' ? nutriaSinCasco : nutria}
        alt='Avatar Nutria'
        className='img_perfil '
      />
      <h2>Nutria</h2>
    </motion.div>
  )
}

export default PhotoNutria