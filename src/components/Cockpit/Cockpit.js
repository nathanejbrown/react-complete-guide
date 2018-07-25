import React from 'react';
import classes from './cockpit.css';
// import Aux from '../../hoc/Aux'; -- this isn't necessary because of React.Fragment

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = classes.Button;
  if(props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <React.Fragment>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>Words and stuff!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </React.Fragment>
  );
// React.Fragment is a built in React component that does what Aux.js does.
};

export default cockpit;
