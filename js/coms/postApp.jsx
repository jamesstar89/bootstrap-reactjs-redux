import React, { Component } from 'react';
import { render } from "react-dom";
import { createStore } from 'redux';
import Actions from '../actions';
import ToggleTheme from './toggleTheme.jsx';
import PhotoWithText from './photoWithText.jsx';
import PhotoGrid2x2 from './photoGrid2x2.jsx';
import PhotoFull from './photoFull.jsx';

// method call
import themeApp from '../reducers';

let store = createStore(themeApp);

var App = false;

const postApp = document.getElementById("postApp");

export default class PostApp extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: store.getState().theme };
  }

  render() {
    var theme = this.state;

    if(this.state.theme === Actions.NIGHT) {
      theme = 'container-fluid night theme'
    } else {
      theme = 'container-fluid day theme'
    }

    return (
      <div className={theme}>
      <nav className='navbar navbar-dark bg-inverse'>
        <a className='navbar-brand' href='/'>Puff Stream</a>
      </nav>
      <section className='column-one'>
        <div className='inner-column-one'>
            <p>Current theme: {this.state.theme}</p>
            <ToggleTheme key={1} />
            <PhotoWithText key={2} />
            <PhotoGrid2x2 key={3} />
            <PhotoFull key={4} />
        </div>
      </section>
    </div>
    );
  }
}

export default App = render(
  <PostApp/>,
  postApp
);