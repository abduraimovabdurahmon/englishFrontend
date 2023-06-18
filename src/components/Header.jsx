import React from "react";
import './../assets/css/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <div className="border-bottom bg-secondary font-weight-bold">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 container">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-white text-decoration-none"
        >
          <h2>Ingliz tili </h2>
        </a>

        {/* <form action="" className="form-inline col-12 col-md-auto mb-3 mb-md-0 d-flex">
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
          <button className="btn btn-outline-light" onClick={(e)=>{
            e.preventDefault();
            alert('Search')
          }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form> */}

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className={(props.route == "home") ? "nav-link px-2 text-white border-bottom":"nav-link px-2 text-white"}
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" className={(props.route == "alphabet")? "nav-link px-2 text-white border-bottom":"nav-link px-2 text-white"}
              onClick={(e) => {
                e.preventDefault();
                navigate("/alphabet");
              }}
            >
              Alifbo
            </a>
          </li>
          <li>
            <a href="#" className={(props.route == "words")? "nav-link px-2 text-white border-bottom":"nav-link px-2 text-white"}
              onClick={(e) => {
                e.preventDefault();
                navigate("/words");
              }}
            >
              So'zlar
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
