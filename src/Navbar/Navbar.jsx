import React from 'react';
import './Navbar.css';
import {links, socials} from './data.jsx'

function Navbar() {
  return (
      <div className="navbar">
        <div className="navbar-name"> 
            Brayam Corral Flores 
        </div>
      
        <ul className="navbar-options"> 
            {
              links.map(({id, url, text}) => {
                return(
                  <li key = {id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })
            }
        </ul>

        <ul className="navbar-icons"> 
            {
              socials.map(({id, url, icon}) => {
                return(
                  <li key = {id}>
                    <a href={url}>{icon}</a>
                  </li>
                );
              })
            }
        </ul>
      </div>
  );
}

export default Navbar;
