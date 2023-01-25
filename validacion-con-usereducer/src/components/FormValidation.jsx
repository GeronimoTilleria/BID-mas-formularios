import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const initialState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};


const reducer = (state, action) => {

  return {
    ...state,
    [action.type]: action.playload
  }
};



const FormValidation = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    console.log(value);
    // Validacion de email
    if (name === "email") {
      let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (regex.test(value)) {
        dispatch({ type: name, playload: { value: value, error: null } });
      } else {
        dispatch({ type: name, playload: { value: '', error: 'Correo invalido' } });
      }
    } else { // Validacion de otros firtName y lastName
      if (value !== '') {
        dispatch({ type: name, playload: { value: value, error: null } });
      } else {
        dispatch({ type: name, playload: { value: '', error: 'Campo obligatorio' } });
      }
    }


  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          className={state.firstName.error ?
            "border border-3 border-danger" :
            ""}
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={state.firstName.value}
          onChange={handleChange} />
        {state.firstName.error !== null && (
          <p className="p-2 mb-2 bg-danger .bg-gradient text-white rounded">{state.firstName.error}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          className={state.lastName.error ?
            "border border-3 border-danger" :
            ""}
          type="text"
          name="lastName"
          placeholder="Enter last name"
          value={state.lastName.value}
          onChange={handleChange} />
        {state.lastName.error !== null && (
          <p className="p-2 mb-2 bg-danger .bg-gradient text-white rounded">{state.lastName.error}</p>
        )}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className={state.email.error ?
            "border border-3 border-danger" :
            ""}
          type="email"
          name="email"
          placeholder="Enter email"
          // value={state.email.value}
          onChange={handleChange} />
        {state.email.error !== null && (
          <p className="p-2 mb-2 bg-danger .bg-gradient text-white rounded">{state.email.error}</p>
        )}
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={
          state.firstName.error !== null || state.firstName.value === '' || state.lastName.error !== null || state.lastName.value === '' || state.email.error !== null || state.email.value === '' ?
            true :
            false
        }>
        Submit
      </Button>
    </Form>
  );
}

export default FormValidation;
