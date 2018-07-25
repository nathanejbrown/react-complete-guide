import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    //Only necessary when update is triggered externally (state is changed in App.js)
    console.log('UPDATE persons.js Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE persons.js Inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked;
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE persons.js inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('UPDATE persons.js inside componentDidUpdate()');
  }

  render () {
    console.log('Persons.js Render');
    return this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          position={index}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      });
  }
};

export default Persons;
