import React from 'react';
import './main.css';
import explorerLogo from './media/Explorers.png';
import scoutLogo from './media/Scouts.png';

function App() {
  return (
    <div className="app">
      <img className="explorerImg" src={explorerLogo} />
      <img className="scoutImg" src={scoutLogo} />
      <hr />
      <div className="contentContainer">
        <h1 className="goudhurstExplorerHeader"><b>Goudhurst Explorers</b></h1>
        <p className="goudhurstExplorerSummary">
          Explorers are the next <s>troop</s> <u>unit</u> after Scouts, our age group ranges from 14 - 18 years old. We meet on Friday evenings between 7 - 9PM.
        </p>
        <h3 className="scoutExplorerHeader">A little bit about us from the scout website</h3>
        <p className="scoutExplorerSummary">
          With the support, direction and guidance of Unit leaders, Explorer Scouts are encouraged to lead themselves, design their own programme and work towards the top awards that Scouting offers. 
          With exciting prospects like being a part of camps and expeditions both home and abroad; adventurous activities such as mountaineering, parascending and off shore sailing; Explorers offers fun and adventure for all. 
          Explorers also have the opportunity to be a part of The Explorer Scout Young Leaders’ Scheme which develops their leadership skills and sense of responsibility, by helping to run meetings for younger sections.
        </p>
            <h3 className="scheduleHeader">Schedule</h3>
            <br />
            <div className="scheduleTable">
              <table>
                <tr>
                  <th>22/11/19</th>
                  <td>Fundraising</td>
                  <td>Notes: We will be creating things that can be sold during "Late night shopping"</td>
                </tr>
                <tr>
                  <th>29/11/19</th>
                  <td>Games</td>
                  <td>Notes:</td>
                </tr>
                <tr>
                  <th>06/12/19</th>
                  <td>Mince Pies, Christmas Decorations, Christmas themed games</td>
                  <td>Notes:</td>
                </tr>
                <tr>
                  <th>13/12/19</th>
                  <td>Mince Pies, Christmas Decorations, Christmas themed games</td>
                  <td>Notes:</td>
                </tr>
              </table>
            </div>
            
            <div className="Footer">
              <p>If you have any questions please don't hesitate to ask, please click <a href="mailto:goudhurstexplorergroup@hotmail.com">here</a> to email us.</p>
              <br/>
              <i>
                This website is currently in development and will likely change mutliple times. 
                However if you wish to get updates on the website with regards to major content change, please <a href="mailto:goudhurstexplorergroup@hotmail.com?subject=Subscription for website updates">email by clicking here</a> with a subject of "Subscription for website updates".
              </i>
            </div>
            
      </div>
    </div>
  );
}

export default App;
