import React from "react";

function Footer({ children }) {
  return (
    <footer className="footer">
      {/* <div className="fInfo">fInfo</div>
            <div className="fMenu">fMenu</div>
            <div className="fAddress">fAddress</div> */}
      {children}
    </footer>
  );
}

export default Footer;
