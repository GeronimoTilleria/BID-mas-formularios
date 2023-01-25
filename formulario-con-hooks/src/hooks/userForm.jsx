import { useState } from "react";

const userForm = (initialValue={}) => {
  const [datos, setDatos] = useState(initialValue);

  const limpiar = () => setDatos(initialValue);

  const handleInputs = e => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  }
  return [datos, handleInputs, limpiar];
}

export default userForm
