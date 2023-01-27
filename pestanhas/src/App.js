import { useState } from 'react';
import './App.css';
import ListaPestanhas from './components/ListaPestanhas';
import MensajePestanha from './components/MensajePestanha';

function App() {

  const longitud = 3;

  const arrayBotones = [];

  for(let i = 0; i < longitud; i++) {
    const nuevoBoton = {
      id: i,
      texto: 'Tab '+(i+1),
      seleccionado: false
    }
    arrayBotones.push(nuevoBoton);
  }

  const [mensaje, setMensaje] = useState('');

  const [botones, setBotones] = useState(arrayBotones);

  return (
    <div className="App">
      <ListaPestanhas
        array={botones}
        setArray={setBotones}
        setMensaje={setMensaje}
       />
      <MensajePestanha 
        texto={mensaje}
      />
    </div>
  );
}

export default App;
