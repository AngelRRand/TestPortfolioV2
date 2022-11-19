import Galaxy from '../assets/galaxy.png';
import GalaxyT from '../assets/galaxyT.png';
import GalaxyB from '../assets/galaxyB.png';

import Link from 'next/link'
import Image from 'next/image'

import PageLayoud from '../component/PageLayoud'
import Stars from '../component/Stars'

import styles from '../styles/Home.module.css'

import { motion } from 'framer-motion';

const Home = () => {
    return (
        <PageLayoud
            title='Explore to Galaxy!'
            content='Home portfolio'
            styleContainer='container_Galaxy'
        >
            <Stars />

            <motion.section
                className={styles.home}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 1.5, type: "spring" },
                }}
            >
                <div className={styles.container_galaxy}>
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
            </motion.section>

        </PageLayoud>
    )
}

export default Home