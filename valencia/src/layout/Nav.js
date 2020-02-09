import React from 'react'
import { 
  FaFacebook , 
  FaTwitter , 
  FaTumblr , 
  FaInstagram , 
  FaYoutube, 
  FaSearch
} from 'react-icons/fa'
import Link from 'next/link';


const Nav = () => {
  return (
    <nav className="Nav">
      <section className="social-lastV">
        <ul className="social">
          <li><FaFacebook /></li>
          <li><FaTwitter /></li>
          <li><FaTumblr /></li>
          <li><FaInstagram /></li>
          <li><FaYoutube /></li>
        </ul>
        <aside className="lastView"></aside>
      </section>
      <section className="logo">
        <Link href='/'>
          <a>
          <img src="../../public/assets/img/logo.png" alt="Star Wars logo"/>
          </a>
        </Link>
      </section>
      <section className="search">
        <label htmlFor="">
          <input type="text"/>
          <FaSearch />
        </label>
        <Link href='/lister' title="lister page"><a>Lister</a></Link>
      </section>
    </nav>
  )
}


export default Nav;