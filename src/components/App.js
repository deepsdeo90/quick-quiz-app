import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList';
import ScoreBoard from './quiz/ScoreBoard';
import Result from './quiz/Result';
import '../css/bootstrap.css';
import '../css/style.css';


class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions:[
				{
					id:1,
					text:"What is your name?",
					choices:[
						{
							id:'a',
							text:'Jim'
						},
						{
							id:'b',
							text:'Jack'
						},
						{
							id:'c',
							text:'John'
						}
					],
					correct: 'a'

				},
				{
					id:2,
					text:"What is your father's name?",
					choices:[
						{
							id:'a',
							text:'Sam'
						},
						{
							id:'b',
							text:'Simmy'
						},
						{
							id:'c',
							text:'Eva'
						}
					],
					correct: 'b'

				},
				{
					id:3,
					text:"What is your mothers name?",
					choices:[
						{
							id:'a',
							text:'Isabella'
						},
						{
							id:'b',
							text:'Danny'
						},
						{
							id:'c',
							text:'Erika'
						}
					],
					correct: 'c'

				},
				{
					id:4,
					text:"What is your friends name?",
					choices:[
						{
							id:'a',
							text:'John'
						},
						{
							id:'b',
							text:'Sam'
						},
						{
							id:'c',
							text:'Jimmy'
						}
					],
					correct: 'a'

				},
				{
					id:5,
					text:"What is your nick name?",
					choices:[
						{
							id:'a',
							text:'Nick'
						},
						{
							id:'b',
							text:'Stephan'
						},
						{
							id:'c',
							text:'Pogba'
						}
					],
					correct: 'b'

				}
			],
			score:0,
			current:1
		}
	}
	setCurrent(current){
		this.setState({
			current
		})
	}
	setScore(score){
		this.setState({
			score
		})
	}
	render(){
		if(this.state.current > this.state.questions.length){
			var scoreboard = '';
			var result = <Result {...this.state} />
		}else{
			var scoreboard = <ScoreBoard {...this.state}/>
			var result = ''
					
 		}
		return(
				<div className="container">
				<div className="row">
				<div className="col">
					<h1>React Quiz</h1>
					<p className="lead">A Simple quiz app using reactjs.</p>
					<hr/>
					{scoreboard}
					<QuestionList setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} {...this.state} />
					{result}
				</div>
				</div>		
				</div>
			)
	}
} 
export default App;