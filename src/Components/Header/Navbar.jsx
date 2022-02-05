import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import NavLogo from "./NavLogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
           <img src={NavLogo} alt="navlogo" width={200} />
          </a>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a href="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </a>
            </li>
            {/* <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  ABOUT
                </Link>
              </li> */}
            <li className="nav-item">
              <a
                href="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRODUCT
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                SERVICES
              </a>
            </li>
            {/* <li className="nav-btn">
                  {button ? (
                    <a href="/sign-up" className="btn-link">
                      <button buttonStyle="btn--outline">SIGN UP</button>
                    </a>
                  ) : (
                    <a
                      href="/sign-up"
                      className="btn-link"
                      onClick={closeMobileMenu}
                    >
                      <button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                      >
                        SIGN UP
                      </button>
                    </a>
                  )}
                </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
