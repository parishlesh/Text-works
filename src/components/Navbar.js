import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">
                  About
                </Link>
              </li>

              <li className="nav-item">

              </li>
            </ul>
            <a className="nav-link" href='#'>
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label
                  className={`form-check-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === 'dark' ? 'Disable ' : 'Enable '}Dark Mode
                </label>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = { title: PropTypes.string }

Navbar.defaultProps = {
  title: "TextWorks"
};
