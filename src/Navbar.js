import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="header">
      <header>
        <nav id="nav">
          <span className="header-span">
            <span className="header-span-menu">
              <div className="header-span-menu-toggle">
                <input
                  type="checkbox"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                />
                <span></span>
                <span></span>
                <span></span>
              </div>
            </span>
            <h1>
              白頭翁不吃小米
              <span className="header-span-logo">
                <div className="header-span-logo-bg">
                  <div className="header-span-logo-bg-head">
                    <div className="header-span-logo-bg-head-face">
                      <div className="header-span-logo-bg-head-face-eye"></div>
                      <div className="header-span-logo-bg-head-face-beak"></div>
                    </div>
                  </div>
                </div>
              </span>
            </h1>
          </span>

          <CSSTransition
            in={toggle}
            timeout={500}
            classNames="collapse"
            unmountOnExit
            appear
          >
            <ul className="header-span-collapse" id="ul">
              <li>
                <NavLink
                  exact
                  className="link"
                  activeClassName="current"
                  to="/"
                >
                  {" "}
                  白頭翁的特性
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="link"
                  activeClassName="current"
                  to="/story"
                >
                  {" "}
                  白頭翁的故事
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="link"
                  activeClassName="current"
                  to="/gallery"
                >
                  白頭翁的美照
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  className="link"
                  activeClassName="current"
                  to="/crisis"
                >
                  白頭翁的危機
                </NavLink>
              </li>
            </ul>
          </CSSTransition>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
