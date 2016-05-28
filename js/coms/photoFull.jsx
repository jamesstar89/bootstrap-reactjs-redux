import React, { Component } from 'react';

export default class PhotoFull extends Component {
  render() {
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
}