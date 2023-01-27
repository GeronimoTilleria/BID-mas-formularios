import React from 'react'
import '../stylesheets/ListaPestanhas.css'
import Pestanha from './Pestanha'

const ListaPestanhas = ({ array, setArray, setMensaje }) => {

    const clickear = (id) => {

        setMensaje(array[id].texto);

        const pestanhasActualizadas = array.map( (boton) => {
            if(boton.id === id) {
                boton.seleccionado = true;
            } else {
                boton.seleccionado = false;
            }
            return boton;
        } );
        setArray(pestanhasActualizadas);
        
        
    }    

    return (
        <div className='contenedor-pestanhas'>
            {
                array.map((item) => 
                    <Pestanha
                        key={item.id}
                        id={item.id}
                        texto={item.texto}
                        clickeada={item.seleccionado}
                        clickear={clickear}
                    />
                )
            }
        </div>
    )
}

export default ListaPestanhas
