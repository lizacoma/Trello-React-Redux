import React, { useState } from 'react';

 const AddForm = (props) => {

    const [text, setText] = useState('');

    const handleChange = event => {
        setText(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(text);
        setText('');
    };

    return (
        <div className = 'form-wrapper'>
            <input  name = 'text' 
                    value = {text} 
                    onChange = {handleChange} 
                /> 
                <button onClick = {handleSubmit}>add</button>
   
        </div>
    )
}

export default AddForm();