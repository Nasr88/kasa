import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <nav className="nav-header">
        {/* utilisé pour créer des liens de navigation dans une application React. */}
        <NavLink to="/" className="nav-header__nav-link-home">
          Accueil
        </NavLink>
        <NavLink to="/about" className="nav-header__nav-link-about">
          A Propos
        </NavLink>
      </nav>
    );
  };
  
  export default Nav;