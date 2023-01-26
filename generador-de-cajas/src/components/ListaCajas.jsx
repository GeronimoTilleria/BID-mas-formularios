import React from 'react'
import Caja from './Caja'
import '../stylesheets/ListaCajas.css'

const ListaCajas = ({ cajas }) => {
  return (
    <ul className='contenedor-cajas'>
        {
            cajas.map((color, indice) => <Caja key={indice} color={color} />)
        }
    </ul>
  )
}

export default ListaCajas
