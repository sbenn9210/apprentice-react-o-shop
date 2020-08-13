import React from 'react';

function TextInput() {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      className="form-control"
    />
  );
}

export default TextInput;
