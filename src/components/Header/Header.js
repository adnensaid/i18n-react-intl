import React, { Component, useContext } from "react";
import logo from "../../assets/images/logo.png";
import Style from "./Header.module.scss";
import { NavLink, Route } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Context } from "../Wrapper";

export default class Header extends Component {
  static contextType = Context;

  render() {
    const ListItemLink = ({ to, name, index, ...rest }) => (
      <Route
        path={to}
        children={() => (
          <li className="nav-item">
            <NavLink
              to={to}
              {...rest}
              activeClassName="active"
              className={
                this.props.scrollTop === 0 &&
                this.props.location.pathname === "/home"
                  ? Style.navlink + " header-light "
                  : Style.navlink + " header-dark"
              }
            >
              <FormattedMessage
                id={"app.header.navlink" + index}
                defaultMessage={name}
              />
            </NavLink>
          </li>
        )}
      />
    );
    const { locale, selectLanguage } = this.context;
    return (
      <nav
        className={
          Style.header + " navbar navbar-expand-lg navbar-light bg-light py-6"
        }
      >
        <div
          className={
            this.props.location.pathname === "/home"
              ? "container-fluid"
              : "container"
          }
        >
          <a className="navbar-brand" href="#">
            <img src={logo} className={Style.logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={Style.navbarMenu + " navbar-nav ms-auto"}>
              <ListItemLink to="/home" name="ACCUEIL" index="0"></ListItemLink>
              <ListItemLink
                to="/service"
                name="SERVICES"
                index="1"
              ></ListItemLink>

              <ListItemLink
                to="/portfolio"
                name="PORTFOLIO"
                index="2"
              ></ListItemLink>
              <ListItemLink
                to="/testimonial"
                name="temoignages"
                index="3"
              ></ListItemLink>
              <ListItemLink
                to="/contact"
                name="contact"
                index="4"
              ></ListItemLink>
              <li className="nav-item">
                <select
                  className="form-select"
                  value={locale}
                  onChange={selectLanguage}
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "none",
                    fontSize: "1rem",
                    lineHeight: "2.5em",
                    padding: "0 1rem",
                    fontFamily: "be_vietnamextrabold",
                    color: "var(--primary)",
                  }}
                >
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                  <option value="ar">AR</option>
                </select>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      /*       <Navbar
        bg={
          this.props.scrollTop === 0 && this.props.location.pathname === "/home"
            ? "transparent"
            : "light"
        }
        expand="lg"
        fixed="top"
        className={Style.header}
      >
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <img src={logo} className={Style.logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className={Style.navbarMenu + " ms-auto"}>
              <NavLink
                to="/home"
                className={
                  this.props.scrollTop === 0 &&
                  this.props.location.pathname === "/home"
                    ? Style.navlink + " text-white"
                    : Style.navlink + " text-dark"
                }
                activeClassName="active"
              >
                <FormattedMessage
                  id="app.header.navlink0"
                  defaultMessage="HOME"
                />
              </NavLink>
              <NavLink
                to="/services"
                className={
                  this.props.scrollTop === 0 &&
                  this.props.location.pathname === "/home"
                    ? Style.navlink + " text-white"
                    : Style.navlink + " text-dark"
                }
                activeClassName="active"
              >
                <FormattedMessage
                  id="app.header.navlink1"
                  defaultMessage="SERVICES"
                />
              </NavLink>
              <NavLink
                to="/portfolio"
                className={
                  this.props.scrollTop === 0 &&
                  this.props.location.pathname === "/home"
                    ? Style.navlink + " text-white"
                    : Style.navlink + " text-dark"
                }
                activeClassName="active"
              >
                <FormattedMessage
                  id="app.header.navlink2"
                  defaultMessage="PORTFOLIO"
                />
              </NavLink>
              <NavLink
                to="/temoignages"
                className={
                  this.props.scrollTop === 0 &&
                  this.props.location.pathname === "/home"
                    ? Style.navlink + " text-white"
                    : Style.navlink + " text-dark"
                }
                activeClassName="active"
              >
                <FormattedMessage
                  id="app.header.navlink3"
                  defaultMessage="TÉMOIGNAGES"
                />
              </NavLink>
              <NavLink
                to="/contact"
                className={
                  this.props.scrollTop === 0 &&
                  this.props.location.pathname === "/home"
                    ? Style.navlink + " text-white"
                    : Style.navlink + " text-dark"
                }
                activeClassName="active"
              >
                <FormattedMessage
                  id="app.header.navlink4"
                  defaultMessage="CONTACT"
                />
              </NavLink>

              <select
                className="form-select"
                value={locale}
                onChange={selectLanguage}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                  fontSize: "1rem",
                  lineHeight: "2.5em",
                  padding: "0 1rem",
                  fontFamily: "be_vietnamextrabold",
                  color: "var(--primary)",
                }}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */
    );
  }
}
