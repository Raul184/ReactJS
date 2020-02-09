import React from 'react'
import PropTypes from 'prop-types'

const ListerItem = ({ name , height , mass }) => {
  return (
    <>
      <p className="name">Nombre: <span>{name}</span></p>
      <p className="height">Altura: <span>{height}</span></p>
      <p className="mass">Peso: <span>{mass}</span></p>
    </>
  )
}

ListerItem.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
}

export default ListerItem
