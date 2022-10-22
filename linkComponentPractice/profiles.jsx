import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./profile.jsx";

function Profiles() {
  return (
    <div>
      <h3>profile</h3>
      <header className="profile_h">
        <ul>
          <li>
            <Link to="/profiles/apple">apple</Link>
            <Link to="/profiles/banana">banana</Link>
          </li>
        </ul>
      </header>
      <section className="profile_b">
        <div>
          <Route
            path="/profiles"
            exact
            render={() => {
              <div>유저를 선택하세요</div>;
            }}
          />
          <Route path="/profiles/:username" component={Profile} />
        </div>
      </section>
    </div>
  );
}

export default Profiles;
