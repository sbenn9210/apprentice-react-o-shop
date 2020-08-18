export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  };

  return fetch(`/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function register(firstName, lastName, username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, username, password }),
  };

  return fetch(`/users/register`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
