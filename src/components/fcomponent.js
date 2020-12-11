import React, { useState, useEffect } from 'react';

const Fcomponent = (props) => {
	const [age, setAge] = useState(25);
	const [count, setCount] = useState(0);
	const [displayval, setdisplayval] = useState('');
	const [firstinput, setfirstinput] = useState('');
	const [secondinput, setsecondinput] = useState('');
	const [operation, setoperation] = useState('');
	const display = document.getElementById("display");
	// let var1, var2;
	function inputPrint(x){
		console.log(x);
		if(operation != ''){
			setsecondinput(x);
		}
		else{
			setfirstinput(x);
		}
		// setdisplayval(displayval + x);
		// setState = () => {
		// 	setdisplayval: displayval + x;
		// }
		// let display = document.getElementById("display");
		// display.value += x;
		// var1 = x;
	}
	function inputCalc(x){
		// switch (x) {
		// 	case x: add
		//
		// 		break;
		// 	default:
		// }
		console.log(x);
		console.log("First input", firstinput);
		console.log("Second input", secondinput);
		setdisplayval(firstinput + secondinput);
		// let x = document.getElementById("display").value
		// let y = eval(x)
		// document.getElementById("display").value = y
	}
	function clearFun(){
		document.getElementById("display").value = ""
	}
	// useEffect(() => {
	// 	setInterval(() => {
	// 		console.log('Component mount and update');
	// 	}, 1000);
	// }, []);
	return (
		<div>
      		<h3>{count} </h3>
			<p>Age: {age}</p>
			<button onClick={()=>setAge(age+1)}>Increase Age</button>
			<div>
				<h3>{props.heading}</h3>
				<div className="display-value">{displayval}</div>
				<div>
					<button className="calc_btn" onClick={()=>inputPrint(1)}>1</button>
					<button className="calc_btn" onClick={()=>inputPrint(2)}>2</button>
					<button className="calc_btn" onClick={()=>inputPrint(3)}>3</button>
					<button className="calc_btn" onClick={()=>setoperation('add')}>+</button>
				</div>
				<div>
					<button className="calc_btn" onClick={()=>inputPrint(4)}>4</button>
					<button className="calc_btn" onClick={()=>inputPrint(5)}>5</button>
					<button className="calc_btn" onClick={()=>inputPrint(6)}>6</button>
					<button className="calc_btn" onClick={()=>setoperation('subtract')}>-</button>
				</div>
				<div>
					<button className="calc_btn" onClick={()=>inputPrint(7)}>7</button>
					<button className="calc_btn" onClick={()=>inputPrint(8)}>8</button>
					<button className="calc_btn" onClick={()=>inputPrint(9)}>9</button>
					<button className="calc_btn" onClick={()=>setoperation('multiply')}>*</button>
				</div>
				<button className="calc_btn" onClick={()=>inputPrint(0)}>0</button>
				<button className="calc_btn" onClick={()=>setoperation('divide')}>/</button>
				<button className="calc_btn" onClick={()=>inputCalc(operation)}>=</button>
				<button className="calc_btn" onClick={()=>setoperation('')}>C</button>
			</div>
		</div>
	);
}


export default Fcomponent;
