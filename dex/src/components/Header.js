import React from "react";
import Logo from "../Tech4Stack Logo.png";
import Eth from "../eth.svg";

function Header(props) {

  const {address, isConnected, connect} = props;

  return (
    <header>
      <div className="leftH">
        <img src={Logo} alt="logo" className="logo" />
        
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected ? (address.slice(0,4) +"..." +address.slice(38)) : "Connect"}
        </div>
      </div>
    </header>
  );
}

export default Header;
