import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TextInput from '../shared/text-input';
import { loginActions } from '../../store/login/action';

function LoginForm() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { username, password } = inputs;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginActions.logout());
  }, [dispatch]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(loginActions.login(username, password));
    }
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
      <form name="form" onSubmit={handleSubmit}>
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
