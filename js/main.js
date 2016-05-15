// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var PostApp = React.createClass({
  render: function() {
    return (
    <div className='container-fluid'>
		<nav className='navbar navbar-dark bg-inverse'>
		  <a className='navbar-brand' href='/'>Puff Stream</a>
		</nav>
		<section className='column-one'>
			<div className='inner-column-one'>
				<ToggleTheme />
				<PhotoWithText />
				<PhotoGrid2x2 />
				<PhotoFull />
			</div>
		</section>
	</div>
    );
  }
});

var ToggleTheme = React.createClass({
  render: function() {
    return (
		<span><input type='checkbox' /> Check for day theme</span>
    );
  }
});

var PhotoWithText = React.createClass({
  render: function() {
    return (
    	<div>
			<h1>What is Lorem Lpsum?</h1>
			<div><img src="images/building.png" /></div>
			<div className="post-by clearfix">
				<span>Post by James Star</span>
			</div>
		</div>
    );
  }
});

var PhotoGrid2x2 = React.createClass({
  render: function() {
    return (
    	<div>
			<h1>What is Lorem Lpsum?</h1>
			<div>
				<div className="col-xs-6 grid-box-1">
					<img src="images/building.png" />
				</div>
				<div className="col-xs-6 grid-box-2">
					<img src="images/building.png" />
				</div>
				<div className="col-xs-6 grid-box-3">
					<img src="images/building.png" />
				</div>
				<div className="col-xs-6 grid-box-4">
					<img src="images/building.png" />
				</div>
			</div>
			<div className="post-by clearfix">
				<span>Post by James Star</span>
			</div>
		</div>
    );
  }
});

var PhotoFull = React.createClass({
  render: function() {
    return (
    	<div>
			<h1>What is Lorem Lpsum?</h1>
			<div><img src="images/building.png" /></div>
			<div className="post-by clearfix">
				<span>Post by James Star</span>
			</div>
		</div>
    );
  }
});

ReactDOM.render(
	<PostApp />,
	document.getElementById('postApp')
);