import React from "react";
import { Route, Link } from "react-router-dom";
//설치: yarn add react-router-dom@5

import "./App.css";
import MainPage from "./main";
import Membership from "./component/membership";
import Product from "./component/product";
import Market from "./component/market";
import Brand from "./component/brand";
import Special from "./component/special";
import Event from "./component/event";
import Delevery from "./component/delivery";

import Footer from "./footer";

function App() {
  return (
    <div className="wrap">
      <header className="header">
        <header className="headerIn">
          <div className="logo">
            <Link to="/">logo</Link>
          </div>
          <div className="hGroup">
            <nav className="nav">
              <ul>
                <li>
                  <Link to="/component/membership">프리미엄멤버쉽</Link>
                </li>
                <li>
                  <Link to="/component/product">냉장제품</Link>
                </li>
                <li>
                  <Link to="/component/market">시크릿마켓</Link>
                </li>
                <li>
                  <Link to="/component/brand">브랜드관</Link>
                </li>
                <li>
                  <Link to="/component/special">기획전</Link>
                </li>
                <li>
                  <Link to="/component/event">이벤트</Link>
                </li>
                <li>
                  <Link to="/component/delivery">가정배달</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </header>
      <div>
        <Route path="/" exact={true} component={MainPage} />
        <Route path="/component/membership" component={Membership} />
        <Route path="/component/product" component={Product} />
        <Route path="/component/market" component={Market} />
        <Route path="/component/brand" component={Brand} />
        <Route path="/component/special" component={Special} />
        <Route path="/component/event" component={Event} />
        <Route path="/component/delivery" component={Delevery} />
      </div>
      <Footer>
        <div className="fInfo">fInfo</div>
        <div className="fMenu">fMenu</div>
        <div className="fAddress">fAddress</div>
      </Footer>
    </div>
  );
}

export default App;
