import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component{
	constructor(props){
		super(props);
	}
	onChange(){

	}
	render(){
		const question = this.props.question;
		return(
				<div className="card">
				<div className="card-header">{question.text}</div>
				<div className="" >
					<ul className="list-group list-group-flush">
					{
						question.choices.map((ch)=>{
							return <li className="list-group-item" key={ch.id}><input type="radio" name={question.id} id={ch.id} value={ch.id} onChange={this.onChange.bind(this) }/>{ch.text}</li>
						})
					}
					</ul>
				</div>
				<br/>
				</div>

			)
	}
} 
export default Question;