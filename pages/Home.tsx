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
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 1.5, type: "spring" },
                }}
            >
                <div className='container_galaxy'>
                    
                </div>
            </motion.section>

        </PageLayoud>
    )
}

export default Home