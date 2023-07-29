import React from "react";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <div className="bottomNav">
      <div>
        <ul>
          <h4>HELP & SUPPORT</h4>
          <li>
            <Link to="/notfound">FAQ</Link>
          </li>
          <li>
            <Link to="/notfound">Delivery</Link>
          </li>
          <li>
            <Link to="/notfound">Returns & Refunds</Link>
          </li>
          <li>
            <Link to="/notfound">Orders & Payments</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <h4>ABOUT GREY WOLF</h4>
          <li>
            <Link to="/notfound">About Us</Link>
          </li>
          <li>
            <Link to="/notfound">Newsroom</Link>
          </li>
          <li>
            <Link to="/notfound">ODR</Link>
          </li>
          <li>
            <Link to="/notfound">Pravicy notice</Link>
          </li>
          <li>
            <Link to="/notfound">Cookies notice</Link>
          </li>
          <li>
            <Link to="/notfound">Company Infomation</Link>
          </li>
        </ul>
      </div>
      <div className="lastTwo">
        <div>
          <ul>
            <h4>JOIN US</h4>
            <li>
              <Link to="/notfound">The Wolf Club</Link>
            </li>
            <li>
              <Link to="/notfound">Careers</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h4>EXPLORE</h4>

            <li>
              <Link to="/notfound">GWolf Values</Link>
            </li>
            <li>
              <Link to="/notfound">GWolf Adaptive</Link>
            </li>
            <li>
              <Link to="/notfound">100% Recycled Denim</Link>
            </li>
            <li>
              <Link to="/notfound">GWolf Black Fridey</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
