import React from 'react';

function Input(props) {
    const { value, handleChange, type, name, placeholder, label, max } = props;


    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                data-testid="input"
                value={value}
                onChange={(e) => handleChange(e.target.value, e.target.name)}
                name={name}
                type={type}
                placeholder={placeholder}
                max={max}
                min={10}
                autoFocus
            />
        </>
    );
}
export default Input;