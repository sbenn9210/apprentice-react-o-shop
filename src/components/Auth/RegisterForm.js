import React, { useState } from 'react';

function RegisterForm() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const { firstname, lastname, username, password } = inputs;

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
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={formChange}
            className={
              'form-control' + (submitted && !firstname ? ' is-invalid' : '')
            }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={formChange}
            className={
              'form-control' + (submitted && !lastname ? ' is-invalid' : '')
            }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={formChange}
            className={
              'form-control' + (submitted && !username ? ' is-invalid' : '')
            }
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={formChange}
            className={
              'form-control' + (submitted && !password ? ' is-invalid' : '')
            }
          />
        </div>
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
