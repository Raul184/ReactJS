import React , { useState} from 'react'
import { useRouter }  from 'next/router';
import uuid from 'uuid'
import { 
  FaFacebook , 
  FaTwitter , 
  FaTumblr , 
  FaInstagram , 
  FaYoutube, 
  FaSearch
} from 'react-icons/fa'

import Link from 'next/link';


const Nav = ({ arr }) => {
  // H
  const Router = useRouter();
  const [data, setData] = useState({
    search: '' 
  })
  const { search } = data;
  const { query } = Router;
  if( query.id !== undefined ){
    arr.push(query.id)
  }
  if(arr.length > 3){ arr.splice(0,1) }

  const handleSubmit = e => e.preventDefault();
  
  return (
    <nav className="Nav">
      <section className="social-lastV">
        <ul className="social">
          <li>
            <Link href='#'>
              <a><FaFacebook /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a><FaTwitter /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a><FaTumblr /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a><FaInstagram /></a> 
            </Link>
          </li>
          <li>
            <Link href='#'>
              <a><FaYoutube /></a> 
            </Link>
          </li>
        </ul>
        {/* HISTORY PROP TO BE INCLUDED */}
        <aside className="lastView">
          { arr.map(el => <span key={uuid()}> {el} </span> ) }
        </aside>
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
              value={search}
              onChange={(e) => { setData({ ...data , [ e.target.name ]: e.target.value })}} 
            />
            <Link href={`/detail?id=${search}`}><a><FaSearch /></a></Link>
          </div>
        </form>  
        <div className="link">
          <Link href='/lister'><a>Go to lister</a></Link>
        </div>
      </section>
    </nav>
  )
}

Nav.defaultProps = {
  arr: []
}

export default Nav;