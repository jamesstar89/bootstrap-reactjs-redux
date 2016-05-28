var Actions = {
	SET_THEME: 'SET_THEME',
	DAY: 'DAY',
	NIGHT: 'NIGHT',
	setTheme: (theme) => {
	  	return {
		  	type: Actions.SET_THEME,
		  	theme
	  }
	}
}

export default Actions;