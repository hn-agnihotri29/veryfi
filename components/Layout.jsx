import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { Fira_Sans } from 'next/font/google';

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400','700']
});

const Layout = ({ children }) => {
  return (

    <div className={fira.className}>
      <div className='layout'>

        <Head>
            <title>Veryfi</title>
        </Head>

        <header>
            <Navbar />
        </header>

        <main className='main-container'>
            {children}
        </main>

        <footer>
            <Footer />
        </footer>

      </div>
    </div>
  )
}

export default Layout