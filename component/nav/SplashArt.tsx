import Image from 'next/image'

import { motion } from "framer-motion";
import styles from './SplashArt.module.scss';
import { currentRouter } from '../../interface/types';

const AvatarNutria: React.FC<currentRouter> = ({ currentRouter, styleSplash, imgSplash, imgSplashCasco }) => {
  return (
    <motion.div
      className={`${styles.avatar_Container} ${styleSplash}`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: currentRouter === '/Dream' ? 0 : 1,
        transition: { duration: 3.5, type: "spring" },
      }}
    >
      
      <Image
        src={currentRouter === '/House' ? imgSplash : currentRouter === '/Art' ? imgSplash : imgSplashCasco}
        alt='Avatar Nutria'
      />
      
      <h2>Nutria</h2>
    </motion.div>
  )
}

export default AvatarNutria