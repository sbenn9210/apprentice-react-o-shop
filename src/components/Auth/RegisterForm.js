import React, { useState } from 'react';
import TextInput from '../shared/text-input';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { firstname, lastname, username, password } = inputs;

  const registerFormData = [
    {
      type: 'text',
      name: 'firstname',
      placeholder: 'First Name',
      value: firstname,
    },
    {
      type: 'text',
      name: 'lastname',
      placeholder: 'Last Name',
      value: lastname,
    },
    {
      type: 'text',
      name: 'username',
      placeholder: 'Username',
      value: username,
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      value: password,
    },
  ];

  const onsubmit = () => {
    setSubmitted(true);
  };

  const formChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const isEmpty = (object) => {
    for (let key in object) {
      if (object[key] === '') return true;
    }
    return false;
  };

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Register</h2>
      <form name="form" onSubmit={onsubmit}>
        {registerFormData.map((field, index) => (
          <div className="form-group" key={index}>
            <TextInput
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={field.value}
              onChange={formChange}
              submitted={submitted}
            />
          </div>
        ))}
        <div className="form-group">
          <button className="btn btn-primary" disabled={isEmpty(inputs)}>
            Register
          </button>
          <button className="btn btn-link">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
