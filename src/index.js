import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            React App
        </div>
      </Router>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('#App'));