import React from "react";
import "./css/membership.css";
import MemberCom01 from "./membership_com01";
import MemberCom02 from "./membership_com02";
import MemberCom03 from "./membership_com03";
import MemberContents from "./membership_contents";

function Membership() {
  return (
    <div>
      <div className="submImg">submImg</div>
      <MemberContents>
        <MemberCom01 />
        <MemberCom02 />
        <MemberCom03 />
      </MemberContents>
    </div>
  );
}

export default Membership;
