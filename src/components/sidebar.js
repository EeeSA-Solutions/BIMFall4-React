import React from "react";
import "../css/site-skeleton.css";
import * as AiIcons from "react-icons/ri";
import * as AiIcons2 from "react-icons/go";
import * as AiIcons3 from "react-icons/gr";
import * as AiIcons4 from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <Router>
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <AiIcons.RiBarChartFill />
                <Link to="/"> Summary</Link>
              </li>
              <li>
                <AiIcons.RiCalendar2Fill />
                <Link to="/">Budget</Link>
              </li>
              <li>
                <AiIcons2.GoCreditCard />
                <Link to="/">Expense</Link>
              </li>
              <li>
                <AiIcons3.GrMoney />
                <Link to="/">Income</Link>
              </li>
              <li>
                <AiIcons.RiRocketLine />
                <Link to="/">Saving-goal</Link>
              </li>
              <li>
                <AiIcons4.FaUserFriends />
                <Link to="/">Social</Link>
              </li>
              <li>
                <AiIcons2.GoCheck />
                <Link to="/">Subscribe</Link>
              </li>
              <li>
                <AiIcons2.GoSignOut />
                <Link to="/">Sign-out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Router>
    </div>
  );
}
