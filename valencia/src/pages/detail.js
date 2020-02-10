import React , { useState , useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'
import Link from 'next/link'
import uuid from 'uuid'
import { useRouter }  from 'next/router';


const Detail = ({ personaje , titles  }) => {
  const Router = useRouter();
  console.log(Router);

  const {
    name ,
    hair_color ,
    skin_color ,
    eye_color ,
    birth_year ,
    gender 
  } = personaje
  
  return (
    <section className="Detail">
      <h1>{name}</h1>
      <p>Hair: {hair_color}</p>
      <p>Skin: {skin_color}</p>
      <p>Eyes color: {eye_color}</p>
      <p>BirthDate: {birth_year}</p>
      <p>Gender: {gender}</p>
      <h2>Movies:</h2>
      <ul>
        { 
          titles !== undefined && titles.map(el => <li key={uuid()}>{el}</li>)
        }
      </ul> 
      <Link href="/lister"><a>Back to list</a></Link>
    </section>
  ) 
}
  
Detail.getInitialProps = async ({ query }) => {
  const titles = [];
  // Get Character
  const res = await fetch(`https://swapi.co/api/people/?search=${query.id}`)
  const resJson = await res.json()
  const personaje = resJson.results[0]
  if(personaje){
    // Get His movies
    personaje.films.forEach( async el => {
      const movie = await fetch(el)
      const movieJson = await movie.json()
      titles.push(movieJson.title)
    })
  }
  return { 
    personaje ,
    titles 
  }
}

Detail.propTypes = {
  results: PropTypes.object ,
}
export default Detail;
