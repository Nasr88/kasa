import logo from "../../assets/images/logo.svg";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="header">
      
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      
      <Nav className="nav-header" />
    </header>
  );
}