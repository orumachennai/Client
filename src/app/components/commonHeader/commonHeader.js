import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import logo from '../../../../images/bomCheckerLogo.svg';
import { Row, Col, Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Modal, Table } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class commonHeader extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			SelectedTabKey: ['1'],
		}
	}
	componentWillMount() {
		this.currentPagePath = window.location.hash;

		if ((this.currentPagePath == '#/transaction')) {
			this.setState({ SelectedTabKey: ['5'] });
		}

		if ((this.currentPagePath == '#/fundView')) {
			this.setState({ SelectedTabKey: ['4'] });
		}
		if ((this.currentPagePath == '#/addFund')) {
			this.setState({ SelectedTabKey: ['3'] });
		}
		if ((this.currentPagePath == '#/addDonor')) {
			this.setState({ SelectedTabKey: ['2'] });
		}
		if ((this.currentPagePath == '#/Home')) {
			this.setState({ SelectedTabKey: ['1'] });
		}
		if ((this.currentPagePath == '#/')) {
			this.setState({ SelectedTabKey: ['1'] });
		}
	}

	handleClick(e) {

		if (e.key == 5) {
			hashHistory.push('/transaction');
		}
		if (e.key == 4) {
			hashHistory.push('/fundView');
		}
		if (e.key == 3) {
			hashHistory.push('/addFund');
		}
		if (e.key == 2) {
			hashHistory.push('/addDonor');
		}
		if (e.key == 1) {
			hashHistory.push('/Home');
		}
	}
	render() {

		return (
			<div>
				<Header className="header">
					<Row>
						<Col span={24} className="logo">
							<div className="logo">
								<Link to="/"><span className="logo-span">Oruma</span></Link>
							</div>
							<Menu
								theme="dark"
								mode="horizontal"
								defaultSelectedKeys={this.state.SelectedTabKey}
								style={{ lineHeight: '64px' }}
								onClick={this.handleClick}
							>
								<Menu.Item key="1">Home</Menu.Item>
								<Menu.Item key="2">Add Donor</Menu.Item>
								<Menu.Item key="3">Add Fund</Menu.Item>
								<Menu.Item key="4">Fund View</Menu.Item>
								<Menu.Item key="5">Transaction View</Menu.Item>
							</Menu>
						</Col>
					</Row>
					<Button type='dashed' name="Name">Name </Button>
				</Header>
			</div>
		);
	}
};
export default commonHeader;

