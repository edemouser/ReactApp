import React from 'react';
import ReactDOM from 'react-dom';

class FormComponent extends React.Component {
	
	constructor(props) {
		
		super(props);
		
		this.state = {firstName : ""};
		
		this.updateState = this.updateState.bind(this);
	}
	
	render() {
		
		return (
		  <div>
			<TestForm formDefaultData = {this.state.firstName} updateDataInfo = {this.updateData}/>
		  </div>
		);
		
	}
	
	updateState(e) {
		this.setState({firstName: e.target.value});
	}

}

class TestForm extends React.Component {
	
	render(){
		
			return(
				<div>
					<div> Test Form </div>
					
					<label> FirstName </label><span>:</span>
					<input type='text' name='fname' id='fname' placeholder='Enter First Name' value={this.props.formDefaultData} onChange = {this.props.updateDataInfo}/>
				</div>
				
			);			
		}
}

export default FormComponent;