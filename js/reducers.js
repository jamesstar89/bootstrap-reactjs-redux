var Actions = require('./actions')

const initialState = {
  theme: Actions.NIGHT
}

// reducers
var themeApp = (state, action) => {
	if(state === undefined) {
		state = initialState;
	}
	switch (action.type) {
	case Actions.SET_THEME:
	  return Object.assign({}, state, {
	    theme: action.theme
	  })
	default:
	  return state
	}
}

module.exports = themeApp