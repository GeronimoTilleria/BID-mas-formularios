import React from 'react'
import '../stylesheets/MensajePestanha.css'

const MensajePestanha = ({ texto }) => {
  return (
    <div className='contenedor-mensaje'>
      {texto} content is showing here.
    </div>
  )
}

export default MensajePestanha
