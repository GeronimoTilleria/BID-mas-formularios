import { useReducer } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListaCajas from './components/ListaCajas';


const initialColors = [];

const reducer = (state, action) => {
  return [...state, action.color];
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialColors);

  const onSubmit = (color) => {

    dispatch({ color: color });
  }

  return (
    <div className="App">
      <Formulario onSubmit={onSubmit} />
      <ListaCajas cajas={state} />
    </div>
  );
}

export default App;
