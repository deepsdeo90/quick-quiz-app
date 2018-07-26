import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ScoreBoard extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className="alert alert-dark">{this.props.current} of {this.props.questions.length} Question <span className="float-right"><strong>Score:{this.props.score}</strong></span></div>

			)
	}
} 
export default ScoreBoard;