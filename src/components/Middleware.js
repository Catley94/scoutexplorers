import React from 'react';
import '../main.css';
import { useAuth0 } from "../react-auth0-spa";
import Schedule from '../components/Schedule';


const Middleware = props => { 
const { loading } = useAuth0();

if (loading) {
    return <div>Loading...</div>;
} 
  return (
    <div>
        <Schedule 
            getTimeDate={props.getTimeDate}
            firstFriday={props.firstFriday}
            firstFridayDate={props.firstFridayDate}
            firstFridayDateOrdinal={props.firstFridayDateOrdinal}
            firstFridayMonth={props.firstFridayMonth}
            secondFridayDate={props.secondFridayDate}
            secondFridayMonth={props.secondFridayMonth}
            thirdFridayDate={props.thirdFridayDate}
            thirdFridayMonth={props.thirdFridayMonth}
            fourthFridayDate={props.fourthFridayDate}
            fourthFridayMonth={props.fourthFridayMonth}
        />
    </div>
  );
}

export default Middleware;
