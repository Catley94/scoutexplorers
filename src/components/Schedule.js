import React from 'react';
import '../main.css';
import { useAuth0 } from "../react-auth0-spa";

const Schedule = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const ifToday = (today) => {
    const dateToday = new Date().getDate();
    if(today === dateToday) {
      return <b>this evening</b>;
    }
    return `the ${props.firstFridayDateOrdinal} ${props.firstFridayMonth}`;
  }
  
  //If not signed in, will display "Please sign in"
  if(!isAuthenticated){
    return <div>Please sign in</div>
  }
  return (
      <div class="container">
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
                  <td>Lordship Woods - Wide games</td>
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
      </div>
  );
}


export default Schedule;
