import React, {Component} from 'react';

class Classcomp extends Component{
	constructor(){
		super()
		this.state = {
			message: 'Welcome',
			count: 0,
			multiplesofTwo : 1
		}
	}
	thanks(){
		// this.setState({
		// 	message: 'Thank you',
		// 	count: this.state.count + 1
		// })
		this.setState(prevState => ({
			count : prevState.count + 1
		}))
	}
	incrementFive(){
		this.thanks()
		this.thanks()
		this.thanks()
		this.thanks()
		this.thanks()
	}
	printConsole(){
		this.setState({
			multiplesofTwo: this.state.multiplesofTwo * 2
		}, () => {console.log("Callback value", this.state.multiplesofTwo)})
	}
	render() {
		return(
			<div>
				<h1>Class Compoent</h1>
				{this.state.message}{this.state.count}
				<br />
				<button onClick={()=>this.thanks()}>click</button> <br />
				<button onClick={()=>this.incrementFive()}>Increment Five</button> <br />
				<button onClick={()=>this.printConsole()}>multiples by two</button>
				<h2>{this.props.name} a.k.a {this.props.heroname}</h2>
				{this.props.children}
			</div>
		)
	}
}

export default Classcomp;
