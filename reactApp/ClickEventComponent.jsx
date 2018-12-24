import React from 'react';
import ReactDOM from 'react-dom';

class ClickEventComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {likesCount : 0, dislikeCount : 0};
		this.onLike = this.onLike.bind(this);
		this.onDisLike = this.onDisLike.bind(this);
	}
  
	
	onLike () {
		let newLikesCount = this.state.likesCount + 1;
		this.setState({likesCount: newLikesCount});
		
		
		var likeBtn = document.getElementById('likeBtn');
		ReactDOM.findDOMNode(likeBtn).style.color = 'green';
	}
	
	onDisLike () {
		let newDisLikesCount = this.state.dislikeCount + 1;
		this.setState({dislikeCount: newDisLikesCount});	
		
		var dislikeBtn = document.getElementById('dislikeBtn');
		ReactDOM.findDOMNode(dislikeBtn).style.color = 'red';
	}
	
	
	render() {
		return (
		  <div>
			Likes : <span>{this.state.likesCount}</span>
			<div><button id="likeBtn" onClick={this.onLike}>Like Me</button></div>
			
			DisLikes : <span>{this.state.dislikeCount}</span>
			<div><button id="dislikeBtn" onClick={this.onDisLike}>DisLike Me</button></div>
		  </div>
		);
	}
}

export default ClickEventComponent;