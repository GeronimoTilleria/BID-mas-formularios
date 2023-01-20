import React from 'react'

const PruebaForm = ({ input, setInput }) => {

   

    const handleInput = (e) => {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <div>
                <input type="text" name='input' onChange={handleInput} />
            </div>
            
        </form>
    )
}

export default PruebaForm
