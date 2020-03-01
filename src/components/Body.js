import React from 'react';
import '../main.css';
import explorerLogo from '../media/Explorers.png';
import scoutLogo from '../media/Scouts.png';

const Body = props => {
  /*
    If props.firstFridayDate is equal to today's date, return "this evening" in bold.
    else - return next explorer date.
  */

  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1><b>Goudhurst Explorers</b></h1>
            <br />
          </div>
          <div className="col-sm-12 text-center">
          <p>
            Explorers are the next <s>troop</s> <u>unit</u> after Scouts, our age group ranges from 14 - 18 years old. We meet on Friday evenings between 7 - 9PM.
          </p>
          </div>
          <div className="col-sm-12">
          <h3>A little bit about us from the scout website</h3>
          <p>
            With the support, direction and guidance of Unit leaders, Explorer Scouts are encouraged to lead themselves, design their own programme and work towards the top awards that Scouting offers. 
            With exciting prospects like being a part of camps and expeditions both home and abroad; adventurous activities such as mountaineering, parascending and off shore sailing; Explorers offers fun and adventure for all. 
            Explorers also have the opportunity to be a part of The Explorer Scout Young Leaders’ Scheme which develops their leadership skills and sense of responsibility, by helping to run meetings for younger sections.
            </p>
        </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <br />
            <p>If you have any questions please don't hesitate to ask, please click <a href="mailto:goudhurstexplorergroup@hotmail.com">here</a> to email us.</p>
          </div>
        </div> 
        {/* <div className="row">
          <div className="col-sm-12">            
            <br/>
            <i>
              This website is currently in development and will likely change mutliple times. 
              However if you wish to get updates on the website with regards to major content change, please <a href="mailto:goudhurstexplorergroup@hotmail.com?subject=Subscription for website updates">email by clicking here</a> with a subject of "Subscription for website updates".
              </i>
          </div>
        </div> */}
      </div>
    </div>
  );
}


export default Body;
