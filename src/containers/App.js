import React, { PureComponent } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  //BEST TO AVOID componentWillMount, componentWillReceiveProps, componentWillUpdate
  // componentWillMount() {
  //   console.log('[App.js] Inside componentWillMount()');
  // }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('UPDATE App.js inside componentWillUpdate()', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('App.js inside getDerivedStateFromProps', nextProps, prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('App.js inside getSnapshotBeforeUpdate');
  }

  componentDidUpdate() {
    console.log('UPDATE App.js inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: ';lkasdo', name: 'Nathan', age: 26},
      { id: 'oiqwef', name: 'Tim', age: 30},
      { id: 'c3p0', name: 'Ronald', age: 90}
    ],
    otherState: 'stuff',
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('App.js render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />

      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // } ONLY WITH RADIUM
    }

    return (
      // <StyleRoot>
        <React.Fragment>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler}
          />
          <AuthContext.Provider value={this.state.authenticated}>
            {persons}
          </AuthContext.Provider>
        </React.Fragment>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React app!'));
  }
}

export default withClass(App, classes.App);
