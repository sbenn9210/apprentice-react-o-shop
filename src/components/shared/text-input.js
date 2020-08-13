import React from 'react';

function TextInput(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      className={`form-control ${
        props.submitted && !props.value ? 'is-invalid' : ''
      }`}
      onChange={props.onChange}
    />
  );
}

export default TextInput;
