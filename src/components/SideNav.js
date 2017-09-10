import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts"> <i className="fa fa-fw fa-bar-chart-o" />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/tables"> <i className="fa fa-fw fa-bar-chart-o" />
            Tables
          </Link>
        </li>
        <li>
          <Link to="/settings"> <i className="fa fa-fw fa-bar-chart-o" />
            settings
          </Link>
        </li>
        <li>
          <Link to="/wall"> 
            <i className="fa fa-fw fa-bar-chart-o" />
            wall
          </Link>
        </li>
        <li>
          <Link to="/profiles"> <i className="fa fa-fw fa-bar-chart-o" />
            profiles
          </Link>
        </li>
        <li>
          <Link to="/marquee/doesthiswork"> <i className="fa fa-fw fa-bar-chart-o" />
            marquee/doesthiswork
          </Link>
        </li>
        {/* <li>
          <a href="charts.html">
            <i className="fa fa-fw fa-bar-chart-o" /> Charts
          </a>
        </li> */}
        {/* <li>
          <a href="tables.html">
            <i className="fa fa-fw fa-table" /> Tables
          </a>
        </li> */}
      </ul>
    </div>);
}

export default SideNav;