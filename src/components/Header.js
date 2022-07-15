import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Place Map App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Place List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Place
        </NavLink>
      </div>
    </header>
  );
};

export default Header;