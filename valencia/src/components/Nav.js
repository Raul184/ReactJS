import React , { useState} from 'react'
import { withRouter }  from 'next/router';

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
  const [data, setData] = useState(''
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    return  <Link href={`/detail?id=${data}`}><a></a></Link>
  }
  return (
    <nav className="Nav">
      <section className="social-lastV">
        <ul className="social">
          <li>
            <Link href='#'>
              <a target="_blank"><FaFacebook /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a target="_blank"><FaTwitter /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a target="_blank"><FaTumblr /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a target="_blank"><FaInstagram /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a target="_blank"><FaYoutube /></a> 
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
          <div className="query">
            <input 
              type="text" 
              placeholder="Star Wars" 
              name="search" 
              value={data}
              onChange={(e) => setData(e.target.value)} 
            />
            <Link href={`/detail?id=${data}`}><a><FaSearch /></a></Link>
          </div>
        </form>  
        <div className="link">
          <Link href='/lister'><a>Go to lister</a></Link>
        </div>
      </section>
    </nav>
  )
}


export default withRouter(Nav);