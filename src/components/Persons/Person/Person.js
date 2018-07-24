import React, { Component } from 'react';
import classes from './Person.css';
// import Radium from 'radium';

class Person extends Component {
  // const style = {
  //   '@media (min-width: 500px)': {
  //     width: '10%'
  //   } //THIS ONLY WORKS WITH RADIUM
  // };

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
  }

  render() {
    console.log('Person.js in render');
    var text = 'I\'m a person';
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>{text} named {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
};

export default Person;
