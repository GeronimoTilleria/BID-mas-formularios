import { useState } from 'react';
import './App.css';
//import PruebaForm from './components/PruebaForm';
import DataForm from './components/DataForm';
import Data from './components/Data';


function App() {

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div className="App">
      <DataForm formValues={formValues} setFormValues={setFormValues} />
      <Data formValues={formValues} />
    </div>
  );
}

export default App;
