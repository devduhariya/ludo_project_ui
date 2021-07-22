import React, { useState, useEffect } from 'react'
import './Style.css';
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";
import Totalchips from './Totalchips';

const Header = ({data}) => {
  const history = useHistory();
  
  const role = JSON.parse(localStorage.getItem('login'));
  
  


  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout()
    alert("logged out");
    history.push("/Home");
    window.location.reload();

  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Welcome</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/termsAndConditions">Term &amp; Condition</a>
            </li>

            {
              localStorage.getItem("login") ?
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/Play">Play<span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/buyChips">Buy Chips</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/sellChips">Sell Chips</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/refer">Refer &amp; Earn</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link waves-effect waves-light" href="/query">Raise Query<span className="card-text blink text-danger new">New</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/help">Help</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={handleLogout} href="/logout">Logout</a>
                  </li>
                  {
                    role.token && role.role == "admin" ?
                      <li className="nav-item">
                        <a className="nav-link" href="/Admin">Admin</a>
                      </li> : null
                  }
                  {
                    role.token && role.role == "admin" ?
                      <li className="nav-item">
                        <a className="nav-link" href="/AdminSellChips">Admin Sell Chips</a>
                      </li> : null
                  }
                  <Totalchips data={data}/>
                </>
                :
                <li className="nav-item">
                  <a className="nav-link" href="/Home">Login</a>
                </li>
            }
          </ul>
        </div>
      </nav>
      <br />
    </div>
  )
}

export default Header
