import React from 'react';
import './main.css';
import explorerLogo from './media/Explorers.png';
import scoutLogo from './media/Scouts.png';
import Body from './Body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFridayDate: 0,
      firstFridayMonth: 0,
      firstFriday: new Date(),
      secondFriday: new Date(),
      thirdFriday: new Date(),
      fourthFriday: new Date(),
      editableDate: new Date(),
    }
  }
  currentDay = "";
  d = new Date();
  
  currentDayNumber = this.d.getDay();
  friday = 5;
  
  fifthFriday;
  latestDateResult;
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  
  updateDay() {
    this.currentDay = this.days[this.d.getDay()];
  }

  findDates(dayNumber, date) {
    let diff = date.getDay() - dayNumber;
    if (diff > 0) {
        date.setDate(date.getDate() + 6);
    }
    else if (diff < 0) {
      date.setDate(date.getDate() + ((-1) * diff))
    }
    else {
      date.setDate(date.getDate() + 7);
    }
    return date;
    // console.log('findDates _date')
    // console.log(_date)
    
}

componentDidMount() {

  this.updateDates();
  // setInterval(this.updateDates, 1000)
}
  updateDates() {
    let _date = this.findDates(5, this.state.editableDate);
    this.setState({
      firstFriday: _date,
      firstFridayDate: _date.getDate()
    }, () => {
      console.log('firstFriday after state update')
      console.log(this.state.firstFriday)
    })
    let _date2 = this.findDates(5, this.state.firstFriday);
    this.setState({
      secondFriday: _date2
    }, () => {
      console.log('secondFriday after state update')
      console.log(this.state.secondFriday)
    })
    let _date3 = this.findDates(5, this.state.secondFriday);
    this.setState({
      thirdFriday: _date3
    }, () => {
      console.log('thirdFriday after state update')
      console.log(this.state.thirdFriday)
    })
    let _date4 = this.findDates(5, this.state.thirdFriday);
    this.setState({
      fourthFriday: _date4
    }, () => {
      console.log('fourthFriday after state update')
      console.log(this.state.fourthFriday)
    })
  }

  render() {



    this.updateDay();
    // this.updateDates()
    return (
      <div className="App">
        <Body 
          getTimeDate={this.currentDay}
          firstFriday={this.firstFriday}
          firstFridayDate={this.state.firstFridayDate}
          firstFridayMonth={this.state.firstFridayMonth}
        />
      </div>
    );
  
  }
  
}
// function getTimeDate() {
//   let d = new Date();
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   return days[d.getDay()]
// }
export default App;
