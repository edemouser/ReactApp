import React from 'react';
//import PropTypes from 'prop-types';

import ClickEventComponent from './ClickEventComponent.jsx';
import LifeCycle from './LifeCycle.jsx';
import FormComponent from './FormComponent.jsx';


class App extends React.Component {
	
	
	constructor(props) {
		
		super(props);
		//console.log(props);
		this.state = {
			data: 
			[
				{
				   "id":1,
				   "name":"Foo",
				   "age":"20"
				},
					
				{
				   "id":2,
				   "name":"Bar",
				   "age":"30"
				},
					
				{
				   "id":3,
				   "name":"Baz",
				   "age":"40"
				}
			],
			
		}
		
	}
	
	
	render() {

		return (
				
			<div>
			   
				<Header/>
				
				<Info InfoData = {this.props.myProp}/>
				
				<table>
					<tbody>
					  {this.state.data.map((person, i) => <TRow key = {i} data = {person} />)}
					</tbody>
				</table>
				
				<h1>React Js Validation of Props</h1>
				<TestValidation validateData = {this.props}/>
				
				<ClickEventComponent />
				<LifeCycle />
				
				<FormComponent />
				
				
			</div>
			
		);
		
	}
}

class Home extends React.Component {
	render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}
class About extends React.Component {
	render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}
class Contact extends React.Component {
	render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

class TestValidation extends React.Component {
		render(){			
			//console.log(this.props.validateData.propFunc(5));
			return(
				<div>
					<span>Arrays :{this.props.validateData.propArray}</span>
					<br/>
					<span>Boolean :{this.props.validateData.propBool ? 'True....' : 'False....'}</span>
					<br/>
					<span>Function :{this.props.validateData.propFunc(5)}</span>
				</div>
				
			);			
		}
}


class Info extends React.Component {
	
	render() {
		return (<h2>{this.props.InfoData} </h2>)
	};
}



class Header extends React.Component {
	
	render() {
		
		return (
			<div>
				<h1>Welcome to the React Js Example</h1>
			</div>
		);
		
	}
}

	
class TRow extends React.Component {
	
	render() {
		
		return (
		
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
		
	}
	
}

// Validation
App.propTypes = {
   propArray: React.PropTypes.array.isRequired,
   propBool: React.PropTypes.bool.isRequired,
   propFunc: React.PropTypes.func
}

// Default define Value
App.defaultProps  = {
	myProp : "My Default Value Call",
	propArray : [1,2,3,4,5,6],
	propBool: true,
	propFunc: function(e){return e}
}
export default App;