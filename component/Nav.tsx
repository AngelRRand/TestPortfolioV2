import React from 'react'
import { motion } from "framer-motion";
import styles from './Nav.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Nav = () => {

    const router = useRouter()
    let currentRouter = router.asPath
    var url = '/'
    
    if(currentRouter === '/'){
        return <></>
    }else{
        return (
            <header className='CAJA'>
                <nav>NAV</nav>
                <div>
                <ul>
                    <li> <Link href={url}><p>VAMOS A SALTAR</p></Link></li>
                </ul>
                </div>
            </header>
        )
    }
}

export default Nav