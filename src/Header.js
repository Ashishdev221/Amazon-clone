import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">hello guest</span>
          <span className="header_optionLineTwo">sign in</span>
        </div>
        <div>
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div>
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
