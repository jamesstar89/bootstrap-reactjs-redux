var React = require('react');

// method call
var onThemeToggle = require('../toggleTheme');

var ToggleTheme = React.createClass({
  render: function() {
    return (
		<span><input type='checkbox' className='toggleThemeCheckbox' onClick={onThemeToggle} /> Check for day theme</span>
    );
  }
});

module.exports = ToggleTheme