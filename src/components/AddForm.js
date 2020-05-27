import React, { useState } from 'react';

 const AddForm = (props) => {
    const {placeholder, className, content, id, onSubmit, onDelete} = props;
    const isContent = content !== '' && content !== undefined ? true : false;

    const [text, setText] = useState(isContent ? content : ''); 
    const [isToggleOn, setToggle] = useState(isContent); 

    const handleChange = event => {
        setText(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!text) return;
        onSubmit(text);
        
        setToggle(!isToggleOn);
        if(!isContent && className !== 'modal-body') setText('');
    };

    const closeForm = () => {
        setText(content);
        setToggle(!isToggleOn);
    };

    return (
        <section className = 'form-wrapper'>   
            {isToggleOn && isContent ? 
            
                <div className = 'title d-flex justify-content-between w-100 py-3 px-2'>
                    <p className = 'text-capitalize m-0' onClick = {() => setToggle(!isToggleOn)}> {content} </p> 
                    {className !== 'modal-body' ? 
                    <i className = "far fa-trash-alt delete" onClick = {() => onDelete(id)}/> :  
                    <i className = "fas fa-pencil-alt" onClick = {() => setToggle(!isToggleOn)}/>}
                </div> 
            :
                <form className = 'form-for-changes'>
                {className !== 'modal-body' ? 
                    <input 
                        name = 'text' 
                        autoFocus
                        className = 'form-control my-2'
                        value = {text} 
                        placeholder = {placeholder}
                        onChange = {handleChange} 
                    /> : 
                    <textarea
                        name = 'text'
                        autoFocus
                        className = 'form-control my-2'
                        rows = '10'
                        value = {text} 
                        placeholder = {placeholder}
                        onChange = {handleChange}
                    />}
                    <div className = 'button-wrapper d-flex pb-3'>
                        <button className = 'add-button btn btn-lg btn-block' onClick = {handleSubmit}>add</button> 
                        {isContent ? 
                        <button className = 'close-button btn btn-lg btn-block w-100 m-0 ml-1' onClick = {closeForm}> 
                            <i className="fas fa-times"/>
                        </button> : ''}
                    </div>
                </form> 
                }
        </section>
    )
};

export default AddForm;