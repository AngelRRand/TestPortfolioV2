import nutria from '../assets/Nav/nutria.gif';
import nutriaSinCasco from '../assets/Nav/nutriaSinCasco.gif';

import Image from 'next/image'

import { motion } from "framer-motion";
import { currentRouter } from '../interface/types';
import styles from './Avatars.module.css';

const AvatarNutria: React.FC<currentRouter> = ({ currentRouter }) => {
  return (
    <motion.div
      className={`${styles.avatar_Container} ${styles.avatar_left}`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: currentRouter === '/Dream' ? 0 : 1,
        transition: { duration: 3.5, type: "spring" },
      }}
    >
      
      <Image
        src={currentRouter === '/House' ? nutriaSinCasco : currentRouter === '/Art' ? nutriaSinCasco : nutria}
        alt='Avatar Nutria'
        className={styles.avatar_Img}
      />
      <h2>Nutria</h2>
    </motion.div>
  )
}

export default AvatarNutria