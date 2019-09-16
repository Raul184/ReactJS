import React from 'react'
import PropTypes from 'prop-types';

export default function Artist({artist}) {
    //Empty ?   => nothing
    if(!artist) return null
    console.log(artist);
    const {images , name , followers, genres } = artist;
    return (
        <div className="Artist">
          <h3>{name}</h3>
          <p>{followers.total} followers</p>
          <p>{genres.join(',')}</p>
          <img 
            src={images[0] && images[0].url} 
            alt="artist profile" 
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                objectFit: 'cover'
            }}  
          />        
        </div>
    )
}

Artist.propTypes = {
  artist : PropTypes.object.isRequired,
}