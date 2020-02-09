import React from 'react'
import uuid from 'uuid'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
//Comps.
import ListerItem from '../components/ListerItem'
//icons
import { FaArrowRight , FaArrowLeft} from 'react-icons/fa'

//eslint-disable-next-line
{/* <Link href={{ pathname: '/detail/', query: { name: `${el.name}` } }}> */}


class Lister extends React.Component {
  static async getInitialProps(ctx) 
  {
    const res = await fetch('https://swapi.co/api/people')
    const resJson = await res.json()
    const { next , previous , results } = resJson;

    return { 
      next , 
      previous , 
      results
    }
  }
  handleClick = async (call) => {
    if(call === null ){
      return ''
    }
    const res = await fetch(call)
    const resJson = res.json()
    this.props.results = resJson;

  }
  render() {
    const { results , next , previous } = this.props;
    return <div className="Lister">
      <section className="results">
      {
        results !== undefined && results.length > 0 && (
          results.map( el => (
            <div key={uuid()} className="ListerItem">
              <ListerItem  {...el} /> 
              <Link href={`/detail?id=${el.name}`}>
                <a>More Details</a>
              </Link>
            </div>
            )
          )
        )
      }
      </section>
      <section className="arrows">
        <FaArrowLeft onClick={() => this.handleClick(previous)}/>
        <FaArrowRight onClick={() => this.handleClick(next)}/>
      </section>
    </div>
  }
}

export default Lister

