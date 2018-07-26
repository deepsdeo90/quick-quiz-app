import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Result extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let percentage = (this.props.score/this.props.questions.length * 100);
		let message='';
		if(percentage>80){
			message ='Well Done';
		}else if(percentage <80 && percentage >60){
			message =' Not Bad';
		}else{
			message='Better Luck Next time';
		}
		return(
				<div className="card bg-light mb-3" >
				  <div className="card-body">
				    <h5 className="card-title">You got {this.props.score} out of {this.props.questions.length} correct </h5>
				    <h1 className="card-text">
				    	 {percentage} % - {message}
				    </h1>
				  </div>
				</div>
			)
	}
} 
export default Result;