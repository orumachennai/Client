import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import CommonPageHeader from '../commonHeader';
import { Button, Form } from 'antd';
import { getFormElement, getFormElementWithSelect, getFormElementWithDate } from './../../common/common';

class addFund extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.enterLoading = this.enterLoading.bind(this);
		this.enterIconLoading = this.enterIconLoading.bind(this);
		this.saveDonor = this.saveDonor.bind(this);
		
		this.state = {
			donor: '',
			options: ['Zakath', 'Corpus', 'Relief'],
			paymentMode: ['Online', 'Cash', 'Cheque'],
			offerAmt: '',
			collectedAmt: '',
			dueDate: '',
			receiptName: '',
			remarks: '',
			loading: false,
			iconLoading: false
		}
	}

	onChange(text) {
		console.log("Text ", text)
	}

	enterLoading() {
		this.setState({ loading: true });
		this.saveDonor();	
	}

	enterIconLoading() {
		this.setState({ iconLoading: true });
	}

	saveDonor() {

	}

	render() {
		return (
			<div>
				<div>
					<CommonPageHeader />
				</div>
				<div className="common-content-layout">
					<h1>Add Fund</h1>
					<Form layout="inline" onSubmit={this.handleSubmit}>
						{getFormElement("Donor", this.state.donor, 'donor', this.onChange)}
						{getFormElementWithSelect("Fund Type", this.state.options, 'fundType', this.onChange)}
						{getFormElementWithSelect("Payment Mode", this.state.paymentMode, 'paymentMode', this.onChange)}
						{getFormElement("Offer Amount", this.state.offerAmt, 'offerAmt', this.onChange)}
						{getFormElement("Collected Amount", this.state.collectedAmt, 'collectedAmt', this.onChange)}
						{getFormElementWithDate("Due Date", this.state.dueDate, 'dueDate', this.onChange)}
						{getFormElement("Receipt Name", this.state.receiptName, 'receiptName', this.onChange)}
						{getFormElement("Remarks", this.state.remarks, 'remarks', this.onChange)}
						<Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
							Add Fund
				</Button>
					</Form>
				</div>
			</div>
		);
	}
};


export default addFund;
