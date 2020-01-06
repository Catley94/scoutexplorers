import React from 'react';
import './main.css';
import explorerLogo from './media/Explorers.png';
import scoutLogo from './media/Scouts.png';
import Body from './Body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  currentDay = "";
  d = new Date();
  editableDate = new Date();
  currentDayNumber = this.d.getDay();
  friday = 5;
  firstFriday;
  
  secondFriday;
  thirdFriday;
  fourthFriday;
  fifthFriday;
  latestDateResult;
  days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  firstFridayDate;
  firstFridayMonth;
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
}
  updateDates() {
    this.firstFriday = this.findDates(this.friday, this.editableDate);
    // console.log('this.firstFriday')
    // console.log(this.firstFriday)
    // console.log(this.firstFriday.getDate(), this.firstFriday.getMonth())
    // console.log(this.firstFriday.getDate(), this.months[this.firstFriday.getMonth()])
    
    this.firstFridayDate = this.firstFriday.getDate();
    this.firstFridayMonth = this.firstFriday.getMonth();
    console.log(this.firstFridayDate)
    this.secondFriday = this.findDates(this.friday, this.firstFriday)
    console.log('this.secondFriday')
    console.log(this.secondFriday)
    this.thirdFriday = this.findDates(this.friday, this.secondFriday);
    console.log('this.thirdFriday')
    console.log(this.thirdFriday)
    this.fourthFriday = this.findDates(this.friday, this.thirdFriday);
    console.log('this.fourthFriday')
    console.log(this.fourthFriday)
    // this.fifthFriday = this.findDates(this.friday, this.fourthFriday);
    // console.log('this.fifthFriday')
    // console.log(this.fifthFriday)
  }
  render() {
    
  
    this.updateDay();
    // this.updateDates()
    return (
      <div className="App">
        <Body 
          getTimeDate={this.currentDay}
          firstFriday={this.firstFriday}
          firstFridayDate={this.firstFridayDate}
          firstFridayMonth={this.firstFridayMonth}
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
