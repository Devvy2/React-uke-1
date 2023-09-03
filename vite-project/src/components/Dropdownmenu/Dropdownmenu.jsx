import { useState, useEffect, useRef } from "react";
import "./dropdownmenu.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function DropdownMenu() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="menu">
      <div className="menu-container" ref={menuRef}>
        <p className="menu-trigger" onClick={toggleMenu}>
          Menu
        </p>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul>
            <DropdownItem text={"React"} link="/" onClick={toggleMenu} />
            <DropdownItem text={"Vite"} link="/vite" onClick={toggleMenu} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <Link to={props.link} onClick={props.onClick}>
        {props.text}
      </Link>
    </li>
  );
}

DropdownItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
