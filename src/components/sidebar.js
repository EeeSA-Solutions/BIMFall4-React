import React from "react";
import "../css/site-skeleton.css";
import { RiBarChartFill } from "react-icons/ri";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Sidebar(){
    return(
        <main>
            <Router>
                <div className="sidebar">
                    <nav>
                        <ul>
                            <li>
                                <RiBarChartFill/>
                                <Link to="/"> Summary</Link>
                            </li>
                            <li>
                                <Link to="/">Budget</Link>
                            </li>
                            <li>
                                <Link to="/">Expense</Link>
                            </li>
                            <li>
                                <Link to="/">Income</Link>
                            </li>
                            <li>
                                <Link to="/">Saving-goal</Link>
                            </li>
                            <li>
                                <Link to="/">Social</Link>
                            </li>
                            <li>
                                <Link to="/">Subscribe</Link>
                            </li>
                            <li>
                                <Link to="/">Sign-out</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        </main>
    )
}