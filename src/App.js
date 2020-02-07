import React from 'react';
import './main.css';
import explorerLogo from './media/Explorers.png';
import scoutLogo from './media/Scouts.png';
import Body from './Body/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f1: {
        firstFridayDate: null,
        firstFridayMonth: 0,
        firstFriday: new Date(),
        description: "",
        notes: ""
      },
      f2: {
        secondFridayDate: null,
        secondFridayMonth: 0,
        secondFriday: new Date(),
        description: "",
        notes: ""
      },
      f3: {
        thirdFridayDate: null,
        thirdFridayMonth: 0,
        thirdFriday: new Date(),
        description: "",
        notes: ""
      },
      f4: {
        fourthFridayDate: null,
        fourthFridayMonth: 0,
        fourthFriday: new Date(),
        description: "",
        notes: ""
      },
      schedule: [
        {

          name: "jan17",
          date: new Date(2020, 0, 17),
          month: 0,
          description: ""

        },

        {

          name: "jan24",
          date: new Date(2020, 0, 24),
          month: 0,
          description: ""

        },

        {

          name: "jan31",
          date: new Date(2020, 0, 31),
          month: 0,
          descrption: ""

        },

        {

          name: "feb7",
          date: new Date(2020, 1, 7),
          month: 1,
          description: ""

        },

        {
          name: "feb14",
          date: new Date(2020, 1, 14),
          month: 1,
          description: ""
        },
        
        {
          name: "feb21",
          date: new Date(2020, 1, 21),
          month: 1,
          description: ""
          },
      ],
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
      _date = date.setDate(date.getDate());
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
      f1: {
        firstFriday: _date,
        firstFridayDate: ordinalIndicator(_date),
        firstFridayMonth: this.months[_date.getMonth()]
      }

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
      f2: {
        secondFriday: _date2,
        secondFridayDate: ordinalIndicator(_date2),
        secondFridayMonth: this.months[_date2.getMonth()]
      }

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
      f3: {
        thirdFriday: _date3,
        thirdFridayDate: ordinalIndicator(_date3),
        thirdFridayMonth: this.months[_date3.getMonth()]
      }

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
      f4: {
        fourthFriday: _date4,
        fourthFridayDate: ordinalIndicator(_date4),
        fourthFridayMonth: this.months[_date4.getMonth()] 
      }

    }, () => {
      // console.log('fourthFriday after state update')
      // console.log(this.state.fourthFriday)
    })
    
    console.log(this.state.schedule)
    let schedule = this.state.schedule;
    schedule.find(session => {
      const nextSession = session.date.getTime() > Date.now()
      console.log(nextSession)
    })

  }
  render() {
    this.updateDay();
    
    return (
      <div className="App">
        <Body 
          getTimeDate={this.currentDay}
          firstFriday={this.state.f1.firstFriday}
          firstFridayDate={this.state.f1.firstFridayDate}
          firstFridayMonth={this.state.f1.firstFridayMonth}
          secondFridayDate={this.state.f2.secondFridayDate}
          secondFridayMonth={this.state.f2.secondFridayMonth}
          thirdFridayDate={this.state.f3.thirdFridayDate}
          thirdFridayMonth={this.state.f3.thirdFridayMonth}
          fourthFridayDate={this.state.f4.fourthFridayDate}
          fourthFridayMonth={this.state.f4.fourthFridayMonth}
        />
      </div>
    );
  
  }
  
}
export default App;
