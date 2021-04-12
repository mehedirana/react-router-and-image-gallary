import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
   
      <nav>
        <div class="nav-wrapper" style={{backgroundColor:'#009ce0'}}  >
          <a href="#" class="brand-logo">
            Welcome
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  
  );
}
