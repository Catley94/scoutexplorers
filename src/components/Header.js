import React from 'react';
import '../main.css';
import explorerLogo from '../media/Explorers.png';
import scoutLogo from '../media/Scouts.png';

const Header = props => {
  
  return (
    <div className="App">
      <div className="jumbotron text-center">
        <div className="row">
          <div className="col-sm-6">
          <img className="explorerImg" src={explorerLogo} />
          </div>
          <div className="col-sm-6">
          <img className="scoutImg" src={scoutLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header;
