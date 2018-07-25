import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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

				},
			],
			score:0,
			current:1
		}
	}
	render(){
		return(
				<div>
				APP
				</div>
			)
	}
} 
export default App;