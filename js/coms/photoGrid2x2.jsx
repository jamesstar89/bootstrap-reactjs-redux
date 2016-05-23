var React = require('react');

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

module.exports = PhotoGrid2x2