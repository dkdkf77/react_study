import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Profiles from "./profiles";
import History from "./history";

function App() {
  return (
    <div>
      <header className="header">
        <ul className="header__nav">
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profiles">프로필 목록</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
        </ul>
        <div>
          <Route path="/" exact={"true"} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/history" component={History} />
        </div>
      </header>
    </div>
  );
}

export default App;
