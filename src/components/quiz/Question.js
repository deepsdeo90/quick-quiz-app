import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Question extends Component{
	constructor(props){
		super(props);
	}
	onChange(e){
			e.preventDefault();
			const {setCurrent,current,setScore} = this.props;

			setCurrent(current+1)
			let ans = e.target.value;
			if(ans===this.props.question.correct){
				setScore(this.props.score+1)
			}
			
	}
	render(){
		const question = this.props.question;
		return(
				<div className="card">
				<div className="card-header">{question.text}</div>
				<div className="card-body" >
					<ul className="list-group">
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