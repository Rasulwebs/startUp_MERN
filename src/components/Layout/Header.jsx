/* eslint-disable no-unused-vars */
import React from "react";
import "./styleHeader.scss";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import openMenuIcon from "../../assets/images/openMenuIcon.svg"
const Header = () => {
  return (
    <>
      <header className="header d-felx- align-items-center">
        <div className="container-fluid">
          <nav className="navbar py-3">
            <button
              className="btn navbar-toggler p-1 openMenuIconBtn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <img src={openMenuIcon} alt="open-menu" />
            </button>
            <Link className="navbar-brand text-start text-light" to="/">
             Logo Navbar
            </Link>

            <div
              className="offcanvas offcanvas-start linksMenuWrapp"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <div className="techFilterMenuWrapp">
                  <Sidebar />
                </div>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      TeamBy
                    </a>
                  </li>{" "}
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
                <form className="d-flex w-100 mt-3" role="search">
                  <input
                    className="form-control me-2 bg-transparent searchInputModal"
                    type="search"
                    placeholder="Enter name Site"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-primary w-25" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="headerLinksWrapp w-50 text-center d-flex justify-content-evenly ">
              <a className="nav-link " aria-current="page" href="#">
                About
              </a>
              <a className="nav-link " aria-current="page" href="#">
                TeamBy
              </a>
              <a className="nav-link " aria-current="page" href="#">
                Blog
              </a>
            </div>
            <div className="authSearchPageBtnWrapp d-flex">
              <Link className="btn btn-outline-info me-2" to={"/login"}>Login</Link>

              <Link className="btn btn-outline-success" to={"/register"}>Register</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
