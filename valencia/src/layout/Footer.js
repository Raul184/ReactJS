import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <>
      <section className="logo">
        <Link href='/'>
          <a>
          <img src="../../public/assets/img/logo.png" alt="Star Wars logo"/>
          </a>
        </Link>
      </section> 
      <p>All rights reserved to Murciegalo Inc. &copy;</p>
    </>
  )
}

export default Footer;