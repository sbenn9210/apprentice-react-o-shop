import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link class="navbar-brand" href="#">
          O
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link disabled"
                to="/shoppingcart"
                tabindex="-1"
                aria-disabled="true"
              >
                Shopping Cart
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdown01"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setDropdown(!dropdown)}
              >
                Dropdown
              </Link>
              <div
                class={'dropdown-menu ' + (dropdown ? 'show' : '')}
                aria-labelledby="dropdown01"
              >
                <Link class="dropdown-item" to="/orders">
                  My Orders
                </Link>
                <Link class="dropdown-item" to="/adminorders">
                  Manage Orders
                </Link>
                <Link class="dropdown-item" to="/adminproducts">
                  Manage Products
                </Link>
                <Link class="dropdown-item" to="">
                  Log Out
                </Link>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <h1>Our React Starter</h1>
    </header>
  );
}

export default Header;
