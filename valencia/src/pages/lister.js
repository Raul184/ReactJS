import React , { useState } from 'react'
import uuid from 'uuid'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
//Comps.
import ListerItem from '../components/ListerItem'
//icons
import { FaArrowRight , FaArrowLeft} from 'react-icons/fa'
import { useRouter } from  'next/router'


const Lister = ({ next , previous , results }) => {
  const router = useRouter();
  const [ data , setData ] = useState({
    sig: next ,
    prev: previous ,
    res: results
  });
  const { sig , prev , res } = data;
  //TO DO => Get Initial Props to recognized new call since 
  // they don't allow me to modify results after fetching new data
  const handlePrev = async () => {
    if(prev === null){
      router.push('/lister')
    }
    else{
      const res = await fetch(prev)
      const resJson = await res.json()
      const { next , previous , results } = resJson;
      setData({
        ...data ,
        sig: next ,
        prev: previous ,
        res: results
      })
    }
  }

  const handleNext = async () => {
    const res = await fetch(sig)
    const resJson = await res.json()
    const { next , previous , results } = resJson;
    setData({
      ...data ,
      sig: next ,
      prev: previous ,
      res: results
    })
  }  

  return (
    <div className="Lister">
      <section className="results">
      {
        res !== undefined && res.length > 0 && (
          res.map( 
            el => <div key={uuid()} className="ListerItem">
              <ListerItem  {...el} /> 
              <Link href={`/detail?id=${el.name}`}>
                <a>More Details</a>
              </Link>
            </div>
          )
        )
      } 
      </section>
      <section className="arrows">
        {/* disable a link in next ?  */}
        <FaArrowLeft onClick={handlePrev}/>
        <FaArrowRight onClick={handleNext}/>
      </section>
    </div>
  )
}

Lister.getInitialProps = async () =>  {
  const res = await fetch('https://swapi.co/api/people')
  const resJson = await res.json()
  const { next , previous , results } = resJson;
  return { 
    next , 
    previous , 
    results
  }
}
export default Lister

