import React from 'react';
import './main.css';
import explorerLogo from './media/Explorers.png';
import scoutLogo from './media/Scouts.png';
import Body from './Body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFridayDate: null,
      firstFridayMonth: 0,
      firstFriday: new Date(),
      secondFridayDate: null,
      secondFridayMonth: 0,
      secondFriday: new Date(),
      thirdFridayDate: null,
      thirdFridayMonth: 0,
      thirdFriday: new Date(),
      fourthFridayDate: null,
      fourthFridayMonth: 0,
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
    let _date;
    if (diff > 0) {
        _date = date.setDate(date.getDate() + 6);
    }
    else if (diff < 0) {
      _date = date.setDate(date.getDate() + ((-1) * diff))
    }
    else {
      _date = date.setDate(date.getDate() + 7);
    }
    return new Date(_date);
  }


componentDidMount() {
  this.updateDates();
}

  updateDates() {
    let dateClone = new Date(+this.state.editableDate);
    let _date = this.findDates(5, dateClone);
    function ordinalIndicator(_date) {
      let indicator;
      if(_date.getDate() === 1) {
        indicator = JSON.stringify(_date.getDate())+'st'
      } else if (_date.getDate() === 2) {
        indicator = JSON.stringify(_date.getDate())+'nd'
      } else if (_date.getDate() === 3) {
        indicator = JSON.stringify(_date.getDate())+'rd'
      } else {
        indicator = JSON.stringify(_date.getDate())+'th'
      }
      return indicator;
    }
    /*****************************************
      First Friday
    ******************************************/
    this.setState({
      firstFriday: _date,
      firstFridayDate: ordinalIndicator(_date),
      firstFridayMonth: this.months[_date.getMonth()]
    }, () => {
      // console.log('firstFriday after state update')
      // console.log(this.state.firstFriday)
    })
    /*****************************************
      Second Friday
    ******************************************/
    let dateClone2 = new Date(+_date.getTime())
    let _date2 = this.findDates(5, dateClone2);
    this.setState({
      secondFriday: _date2,
      secondFridayDate: ordinalIndicator(_date2),
      secondFridayMonth: this.months[_date2.getMonth()]
    }, () => {
      // console.log('secondFriday after state update')
      // console.log(this.state.secondFriday)
    })
    /*****************************************
      Third Friday
    ******************************************/
    let dateClone3 = new Date(+_date2.getTime())
    let _date3 = this.findDates(5, dateClone3);
    this.setState({
      thirdFriday: _date3,
      thirdFridayDate: ordinalIndicator(_date3),
      thirdFridayMonth: this.months[_date3.getMonth()]
    }, () => {
      // console.log('thirdFriday after state update')
      // console.log(this.state.thirdFriday)
    })
    /*****************************************
      Fourth Friday
    ******************************************/
    let dateClone4 = new Date(+_date3.getTime())
    let _date4 = this.findDates(5, dateClone4);
    this.setState({
      fourthFriday: _date4,
      fourthFridayDate: ordinalIndicator(_date4),
      fourthFridayMonth: this.months[_date4.getMonth()]
    }, () => {
      // console.log('fourthFriday after state update')
      // console.log(this.state.fourthFriday)
    })
    
    
    
  }
  render() {
    this.updateDay();
    
    return (
      <div className="App">
        <Body 
          getTimeDate={this.currentDay}
          firstFriday={this.firstFriday}
          firstFridayDate={this.state.firstFridayDate}
          firstFridayMonth={this.state.firstFridayMonth}
          secondFridayDate={this.state.secondFridayDate}
          secondFridayMonth={this.state.secondFridayMonth}
          thirdFridayDate={this.state.thirdFridayDate}
          thirdFridayMonth={this.state.thirdFridayMonth}
          fourthFridayDate={this.state.fourthFridayDate}
          fourthFridayMonth={this.state.fourthFridayMonth}
        />
      </div>
    );
  
  }
  
}
export default App;
