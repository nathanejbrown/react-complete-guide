import React, { PureComponent } from 'react';
import classes from './Person.css';
// import Radium from 'radium';
import withClass from '../../../hoc/withClass';

class Person extends PureComponent {
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

  componentWillReceiveProps(nextProps) {
    //Only necessary when update is triggered externally (state is changed in App.js)
    console.log('UPDATE persons.js Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE persons.js Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE persons.js inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE persons.js inside componentDidUpdate()');
  }

  render() {
    console.log('Person.js in render');
    var text = 'I\'m a person';
    return (
      <React.Fragment>
        <p onClick={this.props.click}>{text} named {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </React.Fragment>
    );
  }
};

export default withClass(Person, classes.Person);
