import React from 'react';


function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            { /*<li className="nav-item">
              <Link Link className="nav-link" to="/about"> {props.about}</Link>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
           
            <button className="btn btn-dark mx-1" onClick={() => props.toggleMode('Light')}>Light Mode</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark mx-1" onClick={() => props.toggleMode('dark')}>Dark Mode</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger mx-1" onClick={() => props.toggleMode('red')}>Red Mode</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   /* <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
    <label class="form-check-label" for="flexCheckChecked">
      Checked checkbox
    </label>
  </div> */
  );
}

export default Navbar;
