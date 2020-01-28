import React from 'react';
import '../main.css';
import explorerLogo from '../media/Explorers.png';
import scoutLogo from '../media/Scouts.png';

const Body = props => {
  /*
    If props.firstFridayDate is equal to today's date, return "this evening" in bold.
    else - return next explorer date.
  */
  const ifToday = (today) => {
    const dateToday = new Date().getDate();
    if(today === dateToday) {
      return <b>this evening</b>;
    }
    return `the ${props.firstFridayDate} ${props.firstFridayMonth}`;
  }
  
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
            <h3>Schedule</h3>
  {/* <h3>Today is {props.getTimeDate}, the next explorer session is {ifToday(props.firstFridayDate)}.</h3> */}
  <h3>Today is {props.getTimeDate}, the next explorer session is {ifToday(props.firstFridayDate)}.</h3>
            <br />
            <table>
              <tbody>
                <tr>
                  {/* <th>{props.thirdFridayDate} {props.thirdFridayMonth}</th> */}
                  <th>31st January</th>
                  <td>Badge planning night</td>
                  <td>Notes: Quiet evening, planning short term and long term badge goals.</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>7th February</th>
                  <td>Lordship Woods - Wide games - unconfirmed</td>
                  <td>Notes: Seb - Snacks, Theo - Activities</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>14th February</th>
                  <td>Pancakes & Pancakes themed activities</td>
                  <td>Notes: Making Pancakes, Oliver / Bea - Ingrediants</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>21st February</th>
                  <td>Half term</td>
                  <td>Notes: Half term</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>28th February</th>
                  <td>Games</td>
                  <td>Notes: Lizzie / Sam - Game ideas</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>6th March</th>
                  <td>Climbing</td>
                  <td>Notes: Chimera - transport discussed sooner.</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>13th March</th>
                  <td>Quiz Night (Fundraising)</td>
                  <td>Notes: Will, Seb, Fin to organise.</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>20th March</th>
                  <td>Hike - Sponsered?</td>
                  <td>Notes: Lizzie - Route / Equipment</td>
                </tr>
                <tr>
                  {/* <th>{props.fourthFridayDate} {props.fourthFridayMonth}</th> */}
                  <th>27th March</th>
                  <td>International Cooking</td>
                  <td>Notes: Everyone to bring their own ingrediants, night to be planned closer to the time.</td>
                </tr>
              </tbody>
            </table>
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
