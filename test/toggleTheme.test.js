var onThemeToggle = require('../js/toggleTheme');
var assert = require('assert');

describe('toggleTheme', function() {

	it('should change theme to DAY', function() {
		var theme = onThemeToggle(true);
		assert(theme === 'DAY');
	})

	it('should change theme to NIGHT', function() {
		var theme = onThemeToggle(false);
		assert(theme === 'NIGHT');
	})

	it('should change theme to NIGHT on default value', function() {
		var theme = onThemeToggle();
		assert(theme === 'NIGHT');
	})

})
