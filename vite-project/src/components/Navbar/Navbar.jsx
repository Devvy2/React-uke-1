import reactLogo from "./../../assets/react.svg";
import "./Navbar.css";
import { DropdownMenu } from "../Dropdownmenu/Dropdownmenu";

export function NavBar() {
  return (
    <div className="navbar">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <h1 className="nav-facts">React + Vite facts</h1>
      <DropdownMenu />
    </div>
  );
}
