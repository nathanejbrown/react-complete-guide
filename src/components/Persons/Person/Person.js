import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '10%'
  //   } //THIS ONLY WORKS WITH RADIUM
  // };
  var text = 'I\'m a person';
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>{text} named {props.name} and I am {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
