var React = require('react');

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

module.exports = PhotoFull