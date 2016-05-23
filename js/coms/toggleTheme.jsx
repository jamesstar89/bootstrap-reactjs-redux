var React = require('react');
var Redux = require('redux').createStore;
var Actions = require('../actions');

// method call
var themeApp = require('../reducers');

let store = Redux(themeApp);

var getApp = () => {
	return require('./postApp.jsx');
}

var onThemeToggle = (event) => {
	var checked = event.target.attributes[0].ownerElement.checked;
	if(checked) {
		store.dispatch(Actions.setTheme(Actions.DAY));
	} else {
		store.dispatch(Actions.setTheme(Actions.NIGHT));
	}
	var App = getApp();
	App.setState({theme: store.getState().theme});
}

var ToggleTheme = React.createClass({
  render: function() {
    return (
		<span><input type='checkbox' onClick={onThemeToggle} /> Check for day theme</span>
    );
  }
});

module.exports = ToggleTheme