import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {

  const {cartItems}=useSelector(state=>state.cartReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EestiBikes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Orders
                </Link>
                </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart {cartItems.length}
                </Link>
              </li>
              <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Language
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">ENG</a></li>
            <li><a class="dropdown-item" href="#">EST</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
