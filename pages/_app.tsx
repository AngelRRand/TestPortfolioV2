import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Nav from '../component/nav/Nav'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <AnimatePresence mode='wait'  initial={false}>

        <Component {...pageProps} key={router.asPath}/>
        <Nav></Nav>
      </AnimatePresence>
    </>
  )
}
