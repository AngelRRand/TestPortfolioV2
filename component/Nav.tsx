import React from 'react'
import { motion } from "framer-motion";
import styles from './Nav.module.css';
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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                </div>
            </header>
        )
    }
}

export default Nav