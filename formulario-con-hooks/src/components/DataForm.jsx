import React, { useState } from "react";
import '../stylesheets/DataForm.css';

const DataForm = ({ formValues, setFormValues }) => {

    const [passwordError, setPasswordError] = useState({
        confirmPassword: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validar Confirm Password

        if (name === 'confirmPassword') {
            if (value.length !== formValues.password.length || value !== formValues.password) {
                console.log('Contraseña incorrecta');
                setPasswordError({
                    confirmPassword: 'Contraseña no coincide'
                });
            }
        }

        if (value === formValues.password) {
            setPasswordError({
                confirmPassword: ""
            });
        }

        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    return (
        <form>
            <div>
                <label>First Name: </label>
                <input type="text" name='firstName' onChange={handleInputChange} value={formValues.firstName} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name='lastName' onChange={handleInputChange} value={formValues.lastName} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name='email' onChange={handleInputChange} value={formValues.email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name='password' onChange={handleInputChange} value={formValues.password} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name='confirmPassword' onChange={handleInputChange} value={formValues.confirmPassword} />
            </div>
            <p style={passwordError.confirmPassword !== '' ? {"display": "block"} : {"display": "none"}}>{passwordError.confirmPassword}</p>
        </form>
    );
}

export default DataForm;