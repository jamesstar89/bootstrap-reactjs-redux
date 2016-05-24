var Redux = require('redux').createStore;
var Actions = require('./actions');

// method calls
var utilities = require('./utilities');

var themeApp = require('./reducers');

let store = Redux(themeApp);

var onThemeToggle = (bool = false) => {
	var checked = bool;
	var newTheme;
	if(utilities.hasDocument()) {
		var element = document.getElementsByClassName('toggleThemeCheckbox');
		checked = element[0].attributes[0].ownerElement.checked;
	}
	if(checked) {
		store.dispatch(Actions.setTheme(Actions.DAY));
	} else {
		store.dispatch(Actions.setTheme(Actions.NIGHT));
	}
	newTheme = store.getState().theme;
	utilities.setTheme(newTheme);
	return newTheme;
}

module.exports = onThemeToggle;