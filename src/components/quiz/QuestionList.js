import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Question from './Question.js';

class QuestionList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div className="well">
				{
						this.props.questions.map(que =>{
							if(this.props.current===que.id){
								return <Question question={que} key={que.id} {...this.props} />
							}
						})
				}
				 
				</div>
			)
	}
} 
export default QuestionList;