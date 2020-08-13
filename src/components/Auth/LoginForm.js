import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextInput from '../shared/text-input';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { username, password } = inputs;

  const onSubmit = () => {
    setSubmitted(true);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const loginFormData = [
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

  return (
    <div className="col-lg-4 offset-lg-4">
      <h2>Login</h2>
      <form name="form" onSubmit={onSubmit}>
        {loginFormData.map((field, index) => (
          <div className="form-group" key={index}>
            <TextInput
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={field.value}
              onChange={onChange}
              submitted={submitted}
            />
          </div>
        ))}
        <div className="form-group">
          <button className="btn btn-primary" disabled={!username || !password}>
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
