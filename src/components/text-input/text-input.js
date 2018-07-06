import React from 'react';
import './style.css';

let TextInput = ({ type, placeholder, value, onChange }) =>
    <input className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange} />

export default TextInput;