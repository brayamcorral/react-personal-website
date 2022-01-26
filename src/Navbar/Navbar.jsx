import React, {useState} from 'react';
import './Navbar.css';
import {links, socials} from './data.jsx'
import { FaBars } from 'react-icons/fa'

function Navbar() {

  const [showToggle, setShowToggle] = useState(true);

  const toggle = () => {
    setShowToggle(!showToggle);
  }

  return (
      <div className="navbar">

        <article className="navbar-header">
          <div className="navbar-name"> 
              Brayam Corral Flores 
          </div>
          
          <div className="navbar-toggle"> 
            <FaBars onClick={() => toggle()}/>
          </div>
        </article>
        
        {showToggle && 
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
        }
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
