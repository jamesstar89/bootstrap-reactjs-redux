import App from './coms/postApp.jsx'

var getApp = () => {
	return App;
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

export default utilities;