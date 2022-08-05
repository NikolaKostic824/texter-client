import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdminNav() {
  const [burger, setBurger] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  useEffect(() => {
    const body = document.querySelector("body");
    if (width <= "991") {
      body.style.overflowY = burger ? "auto" : "hidden";
    }
  }, [burger, width]);

  const noMenu = {
    display: "none",
  };
  const menuActive = {
    display: "inline-block",
  };
  const menuActiveMobileWrapper =  {
    display:"block"
  }
  const menuActiveMobile = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height:"90%"
  }
  const menuActiveBurger = {
    width: "20%",
    marginRight: "0",
  };
  const menuBurger = {
    backgroundColor: "#000",
  };

  return (
    <>
      <nav role="navigation" id="desktop" className="navigation">
        <h1>
          <Link to="/">TEXTER</Link>
        </h1>
        <div className="menuToggle">
          <div className="menu" style={burger ? noMenu : menuActive}>
            <Link to="/" onClick={() => setBurger(true)}>
              Home
            </Link>
            <Link to="/autori" onClick={() => setBurger(true)}>
              Autori
            </Link>
            <Link to="/mim-galerija" onClick={() => setBurger(true)}>
              Mimovi
            </Link>
          </div>

          <div
            className="burger"
            onClick={() => setBurger(burger === true ? false : true)}
          >
            <span
              className="bar"
              style={burger ? menuBurger : menuActiveBurger}
            ></span>
            <span></span>
            <span
              className="bar"
              style={burger ? menuBurger : menuActiveBurger}
            ></span>
          </div>
        </div>
      </nav>

      <nav role="navigation" id="mobile" className="navigation">
        <div className="nav-mobile-wrapper">
          <h1 onClick={() => setBurger(true)}>
            <Link to="/">TEXTER</Link>
          </h1>
          <div className="menuToggle">
            <div
              className="burger"
              onClick={() => setBurger(burger === true ? false : true)}
            >
              <span
                className="bar"
                style={burger ? menuBurger : menuActiveBurger}
              ></span>
              <span></span>
              <span
                className="bar"
                style={burger ? menuBurger : menuActiveBurger}
              ></span>
            </div>
          </div>
        </div>

        <div id="menuMobile" className="menu" style={burger ? noMenu : menuActiveMobileWrapper}>
          <div style={menuActiveMobile}>
            <Link to="/" onClick={() => setBurger(true)}>
              Home
            </Link>
            <Link to="/autori" onClick={() => setBurger(true)}>
              Autori
            </Link>
            <Link to="/mim-galerija" onClick={() => setBurger(true)}>
              Mimovi
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}
