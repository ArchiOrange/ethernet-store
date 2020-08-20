import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return(
      <nav className="navbar__nav navbar fixed-top navbar-expand-lg">
  <Link className="navbar-brand" to="/">Главная</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <Link className="btn button__blue my-2 my-sm-0" to="/search">Search</Link>
    </form>
  </div>
</nav>
    )
}
export default Navbar;
