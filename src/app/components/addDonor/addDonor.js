import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import CommonPageHeader from '../commonHeader';
import { getFormElement, getFormElementWithSelect, getFormElementWithDate, getFormElementWithCheckBox } from './../../common/common';
import { Button, Form } from 'antd';

class addDonor extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
		this.enterLoading = this.enterLoading.bind(this);
		this.enterIconLoading = this.enterIconLoading.bind(this);
		this.saveFund = this.saveFund.bind(this);
		
		this.state = {
			name: '',
			unit: ['Vilivakkam', 'Kilpauk', 'Kolathur'],
			mobile: '',
			watsapp: '',
			address: '',
      zipCode: '',
      email: '',
      remarks: '',
      broadcast: false,
      careOf: '',
			loading: false,
			iconLoading: false
		}
  }

  onChange(text) {
		console.log("Text ", text)
	}

	enterLoading() {
		this.setState({ loading: true });
		this.saveFund();	
	}

	enterIconLoading() {
		this.setState({ iconLoading: true });
	}

	saveFund() {

	}
  
  render() {
		return (
			<div>
				<div>
					<CommonPageHeader />
				</div>
				<div className="common-content-layout">
					<h1>Add Donor Info</h1>
					<Form layout="inline" onSubmit={this.handleSubmit}>
						{getFormElement("Name", this.state.name, 'name', this.onChange)}
						{getFormElementWithSelect("Unit", this.state.unit, 'unit', this.onChange)}
						{getFormElement("Mobile", this.state.mobile, 'mobile', this.onChange)}
						{getFormElement("Watsapp", this.state.watsapp, 'watsapp', this.onChange)}
						{getFormElement("Address", this.state.address, 'address', this.onChange)}
						{getFormElement("Zip-Code", this.state.zipCode, 'zipCode', this.onChange)}
            {getFormElement("E-Mail", this.state.email, 'email', this.onChange)}
						{getFormElementWithCheckBox("Send Broadcast Messages", this.state.broadcast, 'broadcast', this.onChange)}
						{getFormElement("Care Of", this.state.careOf, 'careOf', this.onChange)}
						{getFormElement("Remarks", this.state.remarks, 'remarks', this.onChange)}
						<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
							Add Donor
				</Button>
					</Form>
				</div>
			</div>
		);
	}
};


export default addDonor;
