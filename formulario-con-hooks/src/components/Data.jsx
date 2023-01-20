import React from 'react';
import '../stylesheets/Data.css';

const Data = ({ formValues }) => {
    return (
        <>
            <h3>Your Form Data</h3>
            <ul>
                <li>First Name: {formValues.firstName}</li>
                <li>Last Name: {formValues.lastName}</li>
                <li>Email: {formValues.email}</li>
                <li>Password: {formValues.password}</li>
                <li>Confirm Password {formValues.confirmPassword}</li>
            </ul>
        </>

    );
}

export default Data;