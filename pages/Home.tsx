import PageLayoud from '../component/PageLayoud'
import Stars from '../component/Stars'
import Galaxy from '../assets/galaxy.png';
import GalaxyT from '../assets/galaxyT.png';
import GalaxyB from '../assets/galaxyB.png';
import PlanetTierra from '../assets/Home/planetTierra.png'
import PlanetLava from '../assets/Home/planetLava.png'
import PlanetIce from '../assets/Home/planetIce.png'
import PlanetNet from '../assets/Home/planetNet.png'
import PlanetNetGit from '../assets/Home/planetNetGit.png'
import Señal from '../assets/Home/Señal.gif'

import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'

import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Home = () => {


    useEffect(() => {
        let scrollInterval:any;
    
        const scrollAmount = 50;
    
        const scrollUp = () => {
          window.scroll({
            top: window.scrollY - scrollAmount,
            behavior: 'smooth'
          });
        };
    
        const scrollDown = () => {
          window.scroll({
            top: window.scrollY + scrollAmount,
            behavior: 'smooth'
          });
        };
    
        const handleKeyDown = (e:any) => {
          if (scrollInterval) return; 
    
          if (e.keyCode === 87) {
            scrollInterval = setInterval(scrollUp, 30); // Puedes ajustar el intervalo
          }
    
          if (e.keyCode === 83) {
            scrollInterval = setInterval(scrollDown, 30); // Puedes ajustar el intervalo
          }
        };
    
        const handleKeyUp = () => {
          if (scrollInterval) {
            clearInterval(scrollInterval);
            scrollInterval = null;
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
          window.removeEventListener('keyup', handleKeyUp);
        };
      }, []);


    return (
        <PageLayoud
            title='Explore my Galaxy!'
            content='Home portfolio'
            styleContainer='container_Galaxy'
        >
            <Stars />

            <motion.section
                className={styles.home}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.5, type: "spring" },
                }}
            >
                <div className={styles.galaxy_container}>
                    <Image
                        src={Galaxy}
                        alt='Home galaxy web'
                        className={styles.galaxy}
                    />
                    <Image
                        src={GalaxyT}
                        alt='Home galaxy web animation top'
                        className={`${styles.galaxy} ${styles.galaxyAnimationT}`}
                    />
                    <Image
                        src={GalaxyB}
                        alt='Home galaxy web animation botton'
                        className={`${styles.galaxy} ${styles.galaxyAnimationB}`}
                    />
                </div>

                <div className={styles.galaxy_grid}>
                    <Link href={'/About'} className={`${styles.home_link} ${styles.home_about}`}>
                        <Image
                            src={PlanetTierra}
                            alt='Planet Terra galaxy link image'
                            className='pointer'
                            width={30}
                            height={30}
                            layout='responsive'
                        />
                        <span className='text_señal'>About</span>
                         <Image
                            src={Señal}
                            alt='Pointer galaxy'
                            className='pointer señal'
                            width={80}
                            height={80}
                        /> 
                    </Link>

                    <Link href={'/Education'} className={`${styles.home_link} ${styles.home_education}`}>
                        <Image
                            src={PlanetLava}
                            alt='Planet Lava galaxy link image'
                            className='pointer'
                            width={50}
                            height={50}
                            layout='responsive'
                        />
                        
                        <span className='text_señal'>Education</span>
                         <Image
                            src={Señal}
                            alt='Pointer galaxy'
                            className='pointer señal'
                            width={80}
                            height={80}
                        /> 
                    </Link>

                    <Link href={'/Projects'} className={`${styles.home_link} ${styles.home_projects}`}>
                        <Image
                            src={PlanetIce}
                            alt='Planet Ice galaxy link image'
                            className='pointer'
                            width={50}
                            height={50}
                            layout='responsive'
                        />
                        <span className='text_señal'>Projects</span>
                         <Image
                            src={Señal}
                            alt='Pointer galaxy'
                            className='pointer señal'
                            width={80}
                            height={80}
                        /> 
                    </Link>

                    <Link href={'/Networks'} className={`${styles.home_link} ${styles.home_networks}`}>
                        <Image
                            src={PlanetNet}
                            alt='Planet Networks galaxy link image'
                            className='pointer'
                            width={50}
                            height={50}
                            layout='responsive'
                        />
                        <Image
                            src={PlanetNetGit}
                            alt='Planet Lava galaxy link image'
                            className={`pointer ${styles.planetNetGit}`}
                            width={50}
                            height={50}
                            layout='responsive'
                        />
                        <span className='text_señal'>Networks</span>
                         <Image
                            src={Señal}
                            alt='Pointer galaxy'
                            className='pointer señal'
                            width={80}
                            height={80}
                        /> 
                    </Link>
                </div>
            </motion.section>

        </PageLayoud>
    )
}

export default Home