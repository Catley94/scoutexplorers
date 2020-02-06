import React from 'react';
import './main.css';
import Body from './Body/Body';
import meetings from './meeting/meeting';
import Table from './Table/Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      f1: {
        firstFridayDate: null,
        firstFridayMonth: 0,
        firstFriday: new Date(),
        title: "state static title test",
        notes: "state static notes test"
      },
      f2: {
        secondFridayDate: null,
        secondFridayMonth: 0,
        secondFriday: new Date(),
        title: "",
        notes: ""
      },
      f3: {
        thirdFridayDate: null,
        thirdFridayMonth: 0,
        thirdFriday: new Date(),
        title: "",
        notes: ""
      },
      f4: {
        fourthFridayDate: null,
        fourthFridayMonth: 0,
        fourthFriday: new Date(),
        title: "",
        notes: ""
      },
      schedule: [
        {

          name: "jan17",
          date: new Date(2020, 0, 17),
          month: 0,
          description: "17schedule test",
          notes: "17schedule notes"

        },

        {

          name: "jan24",
          date: new Date(2020, 0, 24),
          month: 0,
          description: "24schedule test",
          notes: "24schedule notes"

        },

        {

          name: "jan31",
          date: new Date(2020, 0, 31),
          month: 0,
          description: "31schedule test",
          notes: "31schedule notes"

        },

        {

          name: "feb7",
          date: new Date(2020, 1, 7),
          month: 1,
          description: "",
          notes: ""

        },

        {
          name: "feb14",
          date: new Date(2020, 1, 14),
          month: 1,
          description: "",
          notes: ""
        },
        
        {
          name: "feb21",
          date: new Date(2020, 1, 21),
          month: 1,
          description: "",
          notes: ""
          },
      ],
      editableDate: new Date(),
    }
  }
  currentDay = "";
  d = new Date();
  
  currentDayNumber = this.d.getDay();
  friday = 5;
  f1Date = new Date();
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
    let _date = this.findDates(this.friday, dateClone);
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
  //  console.log('firstFriday before state update')
   console.log(`_date before f1 state update ${_date}`)
    this.setState({
      f1: {
        firstFriday: _date,
        firstFridayDate: ordinalIndicator(_date),
        firstFridayMonth: this.months[_date.getMonth()],
        title: this.state.f1.title,
        notes: this.state.f1.notes
      }

    }, () => {
      // console.log('firstFriday after state update')
      // console.log(this.state.f1.firstFriday)
      // console.log(`this.state.f1.firstFriday callback update ${this.state.f1.firstFriday}`)
      // console.log(`_date callback update ${_date}`)
      // this.f1Date = this.state.f1.firstFriday;

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
        secondFridayMonth: this.months[_date2.getMonth()],
        title: this.state.f2.title,
        notes: this.state.f2.notes
      }

    }, () => {
      // console.log('secondFriday after state update')
      // console.log(this.state.f2.secondFriday)

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
        thirdFridayMonth: this.months[_date3.getMonth()],
        title: this.state.f3.title,
        notes: this.state.f3.notes
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
        fourthFridayMonth: this.months[_date4.getMonth()],
        title: this.state.f4.title,
        notes: this.state.f4.notes
      }

    }, () => {
      // console.log('fourthFriday after state update')
      // console.log(this.state.fourthFriday)
    })

    let schedule = this.state.schedule;
    // console.log(`this.state.f1.firstFriday before schedule.find ${this.state.f1.firstFriday}`)
    // console.log(`f1Date ${this.f1Date}`)
    // console.log(`firstFridayDate ${this.state.firstFridayDate}`)
    schedule.find(session => {
      // const nextSession = session.date.getTime()
      // console.log(new Date(nextSession))
      // console.log(`this.state.f1.firstFridayDate within schedule.find ${this.state.f1.firstFriday}`)
      // console.log(`this.state.f2.secondFridayDate ${this.state.f2.secondFriday}`)
      // console.log(`this.state.f3.thirdFridayDate ${this.state.f3.thirdFriday}`)
      // console.log(`this.state.f4.fourthFridayDate ${this.state.f4.fourthFriday}`)
      const nextSessionDay = session.date.getDate();
      // console.log(`nextSessionDay ${nextSessionDay}`)
      const nextSessionMonth = session.date.getMonth();
      // console.log(`nextSessionMonth ${nextSessionMonth}`)

      //F1 update
      if(nextSessionDay === this.state.f1.firstFriday.getDate() && nextSessionMonth === this.state.f1.firstFridayMonth) {
        // console.log('match1')
        
        return (this.setState(prevState => ({
          f1: {
            ...prevState.f1,
            title: session.description,
            notes: session.notes
          }
        }), () => {
          // console.log(`this.state.f1.title ${this.state.f1.title}`)
          // console.log(`session ${session.title}`)
        }))
      } else {
        // console.log('no match1')
      }
      if(nextSessionDay === this.state.f2.secondFriday.getDate() && nextSessionMonth === this.state.f2.secondFridayMonth) {
        // console.log('match!2')
        return (this.setState(prevState => ({
          f2: {
            ...prevState.f2,
            title: session.description,
            notes: session.notes
          }
        })))
      } else {
        // console.log('no match2')
      }
      return null;
    })

    

  }

  render() {
    this.updateDay();
    
    return (
      <div className="App">
        <Body 
          f1={this.state.f1}
          f2={this.state.f2}
          f3={this.state.f3}
          f4={this.state.f4}
          getTimeDate={this.currentDay}
        />
      </div>
    );
  
  }
  
}
export default App;
