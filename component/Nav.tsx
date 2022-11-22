import React from 'react'
import { motion } from "framer-motion";
import styles from './Nav.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()
    let currentRouter = router.asPath

    
    if(currentRouter === '/'){
        return <></>
    }else{
        return (
            <header className='CAJA'>
                <nav>NAV</nav>
                <div>
                <ul>
                    <li> <Link></Link></li>
                    <li> <Link></Link></li>
                    <li> <Link></Link></li>
                    <li> <Link></Link></li>
                    <li> <Link></Link></li>
                </ul>
                </div>
            </header>
        )
    }
}

export default Nav