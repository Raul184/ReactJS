import React , { useState} from 'react'
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
  const [data, setData] = useState({
    search: ''
  })
  const { search } = data;
  const handleSubmit = () => {
    console.log('submit');
  }
  return (
    <nav className="Nav">
      <section className="social-lastV">
        <ul className="social">
          <li>
            <Link href='www.facebook.com'>
              <a><FaFacebook /></a> 
            </Link>
          </li>
          <li>
            <Link href='www.twitter.com'>
              <a><FaTwitter /></a> 
            </Link>
          </li>
          <li>
            <Link href='www.tumblr.com'>
              <a><FaTumblr /></a> 
            </Link>
          </li>
          <li>
            <Link href='www.instagram.com'>
              <a><FaInstagram /></a> 
            </Link>
          </li>
          <li>
            <Link href='www.youtube.com'>
              <a><FaYoutube /></a> 
            </Link>
          </li>
        </ul>
        <aside className="lastView">Last checked</aside>
      </section>
      <section className="logo">
        <Link href='/'>
          <a>
          </a>
        </Link>
      </section>
      <section className="search">
        <form onSubmit={handleSubmit}>
          <div class="query">
            <input 
              type="text" 
              placeholder="Star Wars" 
              name="search" 
              value={search}
              onChange={(e) => setData({ ...data , [e.target.name]: e.target.value })} 
              spellcheck="false"
            />
            <FaSearch />
          </div>
        </form>  
        <Link href='/lister'><a>Go to lister</a></Link>
      </section>
    </nav>
  )
}


export default Nav;