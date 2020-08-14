import React from "react";
import {Link} from "react-router-dom"

function Nav() {
    return(
        <ul class="nav">
  <li class="nav-item">
    <Link className="nav-link" to="/about">about</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link" to="/portfolio">portfolio</Link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
    )
}

export default Nav;