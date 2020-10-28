import { hot } from 'react-hot-loader';
import React, { Component } from 'react';

class App extends Component {
  render(): JSX.Element {
    return (
      <div>
        <p>App React</p>
      </div>
    );
  }
}

export default hot(module)(App);
