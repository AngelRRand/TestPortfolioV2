import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import styles from './Nav.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

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
            <header>
                <nav className={styles.nav}>
                    <h3>MENU</h3>
                    <ul>
                        <li> <Link href={'/Home'}><p>To Galaxy</p></Link></li>
                        <li> <Link href={url}><p>Go to Planet</p></Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Nav