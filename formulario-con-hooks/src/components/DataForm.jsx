import React, { useState } from "react";
import '../stylesheets/DataForm.css';

const DataForm = ({ formValues, setFormValues }) => {

    const [formValuesError, setformValuesError] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });

    const handleErrorFirstName = (value) => {
        if (value.length < 2) {
            setformValuesError({
                ...formValuesError,
                firstNameError: "El campo debe tener al menos 2 caracteres"
            });
        } else {
            setformValuesError({
                ...formValuesError,
                firstNameError: ""
            });
        }
    };

    const handleErrorLastName = (value) => {
        if (value.length < 2) {
            setformValuesError({
                ...formValuesError,
                lastNameError: "El campo debe tener al menos 2 caracteres"
            });
        } else {
            setformValuesError({
                ...formValuesError,
                lastNameError: ""
            });
        }
    };

    const handleErrorEmail = (value) => {
        if (value.length < 5) {
            setformValuesError({
                ...formValuesError,
                emailError: "El campo debe tener al menos 5 caracteres"
            });
        } else {
            setformValuesError({
                ...formValuesError,
                emailError: ""
            });
        }
    };

    const handleErrorPassword = (value) => {
        if (value.length < 8) {
            setformValuesError({
                ...formValuesError,
                passwordError: "La contraseña debe tener al menos 8 caracteres"
            });
        } else {
            setformValuesError({
                ...formValuesError,
                passwordError: ""
            });
        }
    };

    const handleErrorConfirmPassword = (value) => {
        if (value.length !== formValues.password.length || value !== formValues.password) {
            setformValuesError({
                ...formValuesError,
                confirmPasswordError: "La contraseña no coincide"
            });
        } else {
            setformValuesError({
                ...formValuesError,
                confirmPasswordError: ""
            });
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // Validacion
        if (name === 'firstName') {
            handleErrorFirstName(value);
        } else if (name === 'lastName') {
            handleErrorLastName(value);
        } else if (name === 'email') {
            handleErrorEmail(value);
        } else if (name === 'password') {
            handleErrorPassword(value);
        } else {
            handleErrorConfirmPassword(value);
        }


        // if (name === 'confirmPassword') {
        //     if (value.length !== formValues.password.length || value !== formValues.password) {
        //         console.log('Contraseña incorrecta');
        //         setPasswordError({
        //             confirmPassword: 'Contraseña no coincide'
        //         });
        //     }
        // }

        // if (value === formValues.password) {
        //     setPasswordError({
        //         confirmPassword: ""
        //     });
        // }

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
            {
                formValuesError.firstNameError ?
                    formValues.firstName ?
                        <p>{formValuesError.firstNameError}</p> :
                        '' :
                    ''
            }
            <div>
                <label>Last Name: </label>
                <input type="text" name='lastName' onChange={handleInputChange} value={formValues.lastName} />
            </div>
            {
                formValuesError.lastNameError ?
                    formValues.lastName ?
                        <p>{formValuesError.lastNameError}</p> :
                        '' :
                    ''
            }
            <div>
                <label>Email: </label>
                <input type="email" name='email' onChange={handleInputChange} value={formValues.email} />
            </div>
            {
                formValuesError.emailError ?
                    formValues.lastName ?
                        <p>{formValuesError.lastNameError}</p> :
                        '' :
                    ''
            }
            <div>
                <label>Password: </label>
                <input type="password" name='password' onChange={handleInputChange} value={formValues.password} />
            </div>
            {
                formValuesError.passwordError ?
                    formValues.password ?
                        <p>{formValuesError.passwordError}</p> :
                        '' :
                    ''
            }
            <div>
                <label>Confirm Password: </label>
                <input type="password" name='confirmPassword' onChange={handleInputChange} value={formValues.confirmPassword} />
            </div>
            {
                formValuesError.confirmPasswordError ?
                    formValues.confirmPassword ?
                        <p>{formValuesError.confirmPasswordError}</p> :
                        '' :
                    ''
            }
        </form>
    );
}

export default DataForm;