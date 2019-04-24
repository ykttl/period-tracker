import React, { Component } from 'react';
import moment from 'moment';
import './style.css';
class Calendar extends Component {
  state = {
    dateObject: moment()
  };

  getFirstDatOfMonth = () => {
    const firstDay = moment()
      .startOf('month')
      .format('d');
    return firstDay;
  };
  getDaysInMonth = () => {
    return moment().daysInMonth();
  };
  getCurrentDay = () => {
    return moment().format('D');
  };
  render() {
    const daysOfTheWeek = moment.weekdaysShort().map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });

    const blanks = [];
    for (let i = 0; i < this.getFirstDatOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{''}</td>);
    }

    let daysInMonth = [];
    for (let i = 1; i < this.getDaysInMonth(); i++) {
      let currentDay = i == this.getCurrentDay() ? 'today' : '';
      daysInMonth.push(
        <td key={i} className={`calendar-day ${currentDay}`}>
          {i}
        </td>
      );
    }

    const blanksANDdays = [...blanks, ...daysInMonth];
    let calendarRows = [];
    let week = [];

    blanksANDdays.forEach((item, index) => {
      if (index % 7 !== 0) {
        week.push(item);
      } else {
        calendarRows.push(week);
        week = [];
        week.push(item);
      }
      if (index === blanksANDdays.length - 1) {
        calendarRows.push(week);
      }
    });

    daysInMonth = calendarRows.map((day, index) => {
      return <tr>{day}</tr>;
    });

    return (
      <div>
        <table className="calendar-day">
          <thead>
            <tr>{daysOfTheWeek}</tr>
          </thead>
          <tbody>{daysInMonth}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;

@import url(https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);

.icon {
  font-family: 'Material Icons', serif;
  font-style: normal;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
}

/* VARIABLES */

:root {
  --main-color: #1a8fff;
  --text-color: #777;
  --text-color-light: #ccc;
  --border-color: pink;
  --bg-color: #f9f9f9;
  --neutral-color: #fff;
}

/* GENERAL */

* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  color: var(--text-color);
  background: var(--bg-color);
  position: relative;
}

header {
  display: block;
  width: 100%;
  padding: 1.75em 0;
  border-bottom: 1px solid var(--border-color);
  background: var(--neutral-color);
}

header #logo {
  font-size: 175%;
  text-align: center;
  color: var(--main-color);
  line-height: 1;
}

header #logo .icon {
  padding-right: 0.25em;
}

main {
  display: block;
  margin: 0 auto;
  margin-top: 5em;
  max-width: 50em;
}

/* GRID */

.row {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}

.row-middle {
  align-items: center;
}

.col {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
}

.col-start {
  justify-content: flex-start;
  text-align: left;
}

.col-center {
  justify-content: center;
  text-align: center;
}

.col-end {
  justify-content: flex-end;
  text-align: right;
}

/* Calendar */

.calendar {
  display: block;
  position: relative;
  width: 100%;
  background: var(--neutral-color);
  border: 1px solid var(--border-color);
}

.calendar .header {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 115%;
  padding: 1.5em 0;
  border-bottom: 1px solid var(--border-color);
}

.calendar .header .icon {
  cursor: pointer;
  transition: 0.15s ease-out;
}

.calendar .header .icon:hover {
  transform: scale(1.75);
  transition: 0.25s ease-out;
  color: var(--main-color);
}

.calendar .header .icon:first-of-type {
  margin-left: 1em;
}

.calendar .header .icon:last-of-type {
  margin-right: 1em;
}

.calendar .days {
  text-transform: uppercase;
  font-weight: 400;
  color: var(--text-color-light);
  font-size: 70%;
  padding: 0.75em 0;
  border-bottom: 1px solid var(--border-color);
}

.calendar .body .cell {
  position: relative;
  height: 5em;
  border-right: 1px solid var(--border-color);
  overflow: hidden;
  cursor: pointer;
  background: var(--neutral-color);
  transition: 0.25s ease-out;
}

.calendar .body .cell:hover {
  background: var(--bg-color);
  transition: 0.5s ease-out;
}

.calendar .body .selected {
  border-left: 10px solid transparent;
  border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);
  border-image-slice: 1;
}

.calendar .body .row {
  border-bottom: 1px solid var(--border-color);
}

.calendar .body .row:last-child {
  border-bottom: none;
}

.calendar .body .cell:last-child {
  border-right: none;
}

.calendar .body .cell .number {
  position: absolute;
  font-size: 82.5%;
  line-height: 1;
  top: 0.75em;
  right: 0.75em;
  font-weight: 700;
}

.calendar .body .disabled {
  color: var(--text-color-light);
  pointer-events: none;
}

.calendar .body .cell .bg {
  font-weight: 700;
  line-height: 1;
  color: var(--main-color);
  opacity: 0;
  font-size: 8em;
  position: absolute;
  top: -0.2em;
  right: -0.05em;
  transition: 0.25s ease-out;
  letter-spacing: -0.07em;
}

.calendar .body .cell:hover .bg,
.calendar .body .selected .bg {
  opacity: 0.05;
  transition: 0.5s ease-in;
}
.calendar .body .col {
  flex-grow: 0;
  flex-basis: calc(100% / 7);
  width: calc(100% / 7);
}

.pills {
  /* background: red; */
}
