import React from 'react'
import '../stylesheets/Pestanha.css'

const Pestanha = ({ id, texto, clickeada, clickear }) => {
  return (
    <div
        className={clickeada ? 
                    'pestanha seleccionado' :
                    'pestanha'}
        onClick={() => clickear(id)}
    >
        {texto}
    </div>
  )
}

export default Pestanha
