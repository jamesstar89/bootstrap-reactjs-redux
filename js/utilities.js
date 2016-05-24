var getApp = () => {
	return require('./coms/postApp.jsx');
}

var setTheme = (newTheme) => {
	if(hasDocument()) {
		var App = getApp();
		App.setState({theme: newTheme});
	}
}

var hasDocument = () => {
	if(typeof document != 'undefined') {
		return true;
	} else {
		return false;
	}
}

var utilities = {
	setTheme: setTheme,
	hasDocument: hasDocument
}

module.exports = utilities;