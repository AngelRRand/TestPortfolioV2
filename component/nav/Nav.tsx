import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import ligthgreen from '../assets/Nav/ligthgreen.gif';
import ligthred from '../../assets/Nav/ligthred.gif';
import avatar from '../../assets/Nav/n.gif';
import nutria from '../../assets/Nav/nutria.gif';


import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './Nav.module.scss';
import SplashArt from './SplashArt';

const Nav = () => {

    const router = useRouter()
    let currentRouter = router.asPath
    const [url, setUrl] = useState('')


    useEffect(() => {
        if (currentRouter) {

        }

    }, [currentRouter])



    if (currentRouter === '/') {
        return <></>
    } else {
        return (
            <>
            <header>
                <nav className={styles.nav}>
                    <h3 className='pointer'>Menu</h3>

                    {/* 

                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.5, type: "spring" },
                        }}
                    >
                        <li className={styles.navLink}> <Link href={'/Home'}><p>To Galaxy <Image
                            src={ligthgreen}
                            alt='Planet Terra galaxy link image'
                            className='pointer'
                            width={30}
                            height={30}
                        /></p></Link></li>
                        <li className={styles.navLink}> <Link href={url}><p>Go to Planet <Image
                            src={ligthgreen}
                            alt='Planet Terra galaxy link image'
                            className='pointer'
                            width={30}
                            height={30}
                        /></p></Link></li>
                        <li className={styles.navLink}> <Link href={url}><p>Open the map <Image
                            src={ligthgreen}
                            alt='Planet Terra galaxy link image'
                            className='pointer'
                            width={30}
                            height={30}
                        /></p></Link></li>
                    </motion.ul> 
                    
                    */}

                </nav>
            </header>

            <div className={styles.nav}>

                <SplashArt 
                    currentRouter={currentRouter}
                    styleSplash={"styles.avatar_left"}
                    imgSplash={avatar}
                    imgSplashCasco={avatar}
                />

                <SplashArt 
                    currentRouter={currentRouter}
                    styleSplash={"styles.avatar_right"}
                    imgSplash={nutria}
                    imgSplashCasco={nutria}
                />

            </div>

            </>
        )
    }
}

export default Nav