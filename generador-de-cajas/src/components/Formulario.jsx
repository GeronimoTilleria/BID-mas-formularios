import React from 'react'
import { useReducer } from 'react';
import '../stylesheets/Formulario.css'

const initialState = {
  color: '',
  error: null
};

const reducer = ( state, action ) => {
  return {
    ...state,
    [action.type]: action.playload.color
  };
};

const Formulario = ({ onSubmit }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    dispatch( {
      type: name,
      playload: { color: value, error: null }
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'color',
      playload: initialState
    })

    onSubmit(state.color);
  };

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <label>Color</label>
      <input
        type='text'
        name='color'
        value={state.color}
        onChange={handleChange}
      />

      <input
        type='submit'
        name='add'
        value='Add'
      />
    </form>

  )
}

export default Formulario
