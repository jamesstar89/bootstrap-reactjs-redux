import React, { Component } from 'react';

// method call
import onThemeToggle from '../toggleTheme';

export default class ToggleTheme extends Component {
  render() {
    return (
		<span><input type='checkbox' className='toggleThemeCheckbox' onClick={onThemeToggle} /> Check for day theme</span>
    );
  }
}