var React = require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux').createStore;
var Actions = require('../actions');
var ToggleTheme = require('./toggleTheme.jsx');
var PhotoWithText = require('./photoWithText.jsx');
var PhotoGrid2x2 = require('./photoGrid2x2.jsx');
var PhotoFull = require('./photoFull.jsx');

// method call
var themeApp = require('../reducers');

let store = Redux(themeApp);

var App = false;

var PostApp = React.createClass({
  getInitialState: function() {
    return {theme: store.getState().theme};
  },
  render: function() {
  	var theme;
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
});

var init = () => {
  if(!App) {
    App = ReactDOM.render(
      <PostApp />,
      document.getElementById('postApp')
    );
  }
};

init();

module.exports = App