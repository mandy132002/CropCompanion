import { useEffect, useState } from "react";
import { getTopNav } from "./../data/navbars";
import "../css/navbar.css";
import { signout } from "../api";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navItems, setNavItems] = useState([]);
  const [collapse, setCollapse] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  const navigate = useNavigate();

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    collapse === "nav__menu"
      ? setCollapse("nav__menu nav__collapse")
      : setCollapse("nav__menu");

    toggleIcon === "toggler__icon"
      ? setToggleIcon("toggler__icon toggle")
      : setToggleIcon("toggler__icon");
  };

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <a href="#" className="nav__brand">
            Crop Companion
          </a>
          <ul className={collapse}>
            {navItems.map((item) => (
                <li key={item.id} className="nav__item">
                  {/* {item.label === "Logout" && <p onclick={(e) => {
                    e.preventDefault();
                    Logout(item.label)}}>{item.label}</p>} */}
                  <a href={item.href} className="nav__link">    
                  {item.label}
                </a>  
                {/* <a href={item.href} className="nav__link" onclick={(e) => {
                  e.preventDefault();
                  Logout(item.label)}}>    
                  {item.label}
                </a> */}
              </li>
            ))}
          </ul>
          <div className={toggleIcon} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;