import React from 'react';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          <ul className="navbar-nav">            <li className="nav-item">
          <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  onClick={() => props.toggleMode(props.mode === 'dark' ? 'light' : 'dark')}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  checked={props.mode === 'dark'}
                  readOnly
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                  {props.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
