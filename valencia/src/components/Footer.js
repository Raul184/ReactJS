import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <>
      <section className="Footer">
        <section className="logoF">
          <Link href='/'><a></a></Link>
        </section>
        <p>All rights reserved to Murciegalo Inc. 2020 &copy; </p>
      </section> 
    </>
  )
}

export default Footer;