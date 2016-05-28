import { createStore } from 'redux';
import Actions from './actions';

// method calls
import utilities from './utilities';

import themeApp from './reducers';

let store = createStore(themeApp);

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

export default onThemeToggle;