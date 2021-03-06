import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [dropdown, setDropdown] = useState(false);

  const fullName = useSelector(
    (state) => `${state.login.user.firstName} ${state.login.user.lastName}`
  );

  const headerClick = () => setDropdown(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="#">
          O
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled"
                to="/cart"
                tabIndex="-1"
                aria-disabled="true"
              >
                Shopping Cart
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdown01"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setDropdown(!dropdown)}
              >
                {fullName}
              </Link>
              <div
                className={'dropdown-menu ' + (dropdown ? 'show' : '')}
                aria-labelledby="dropdown01"
              >
                <Link
                  className="dropdown-item"
                  to="/orders"
                  onClick={headerClick}
                >
                  My Orders
                </Link>
                <Link
                  className="dropdown-item"
                  to="/admin-orders"
                  onClick={headerClick}
                >
                  Manage Orders
                </Link>
                <Link
                  className="dropdown-item"
                  to="/admin-products"
                  onClick={headerClick}
                >
                  Manage Products
                </Link>
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={headerClick}
                >
                  Log Out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <h1>Our React Starter</h1>
    </header>
  );
}

export default Header;
