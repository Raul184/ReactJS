import React from 'react';
import Spinner from './Spinner';

export default function Results({cantidad , plazo , total , loading}) {
  return(
    loading ? 
      <Spinner /> 
      :(
        <div className="Results u-full-width">
          <h4>Calcs</h4>
          <p>Presupuestado: {cantidad} euros</p>
          <p>A pagar en: {plazo} años</p>
          <p>Total a pagar: {total} euros</p>
        </div>
      )
  )
}
