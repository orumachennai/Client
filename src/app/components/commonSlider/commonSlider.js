import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import logo from '../../../../images/bomCheckerLogo.svg';
import { Layout, Menu, Breadcrumb, Icon, Dropdown} from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class commonSlider extends Component {
  constructor(props) {
    super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = {
      SelectedTabKey : ['1'],
    }
  }
  componentWillMount() {
     this.currentPagePath = window.location.pathname;
	 
	 if((this.currentPagePath == '/dashboard')){
        this.setState({SelectedTabKey: ['5']});
	  }
	 if((this.currentPagePath == '/surfaceAnalysis')){
        this.setState({SelectedTabKey: ['4']});
	  }
	  if((this.currentPagePath == '/clamAV')){
        this.setState({SelectedTabKey: ['3']});
	  }
	  if((this.currentPagePath == '/foss')){
        this.setState({SelectedTabKey: ['2']});
	  }
	  if((this.currentPagePath == '/dashboard')){
        this.setState({SelectedTabKey: ['1']});
	  }
	   if((this.currentPagePath == '/')){
        this.setState({SelectedTabKey: ['1']});
	  }
   }
   
   handleClick(e){
	if(e.key == 5){
	  hashHistory.push('/dashboard');
	}
	if(e.key == 4){
	  hashHistory.push('/surfaceAnalysis');
	}
	if(e.key == 3){
	  hashHistory.push('/clamAV');
	}
	if(e.key == 2){
	  hashHistory.push('/foss');
	}
	if(e.key == 1){
	  hashHistory.push('/dashboard');
	}
  }


  render(){
    return(
      <div>
	  <Sider className="hey common-slider"
      breakpoint="lg"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
          <Menu
            mode="inline"
			onClick={this.handleClick}
            defaultSelectedKeys={this.state.SelectedTabKey} 
			className="slider-menu"
          >
		   <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <span>FOSS</span>
            </Menu.Item>
			<Menu.Item key="3">
              <span>ClamAV</span>
            </Menu.Item>
			<Menu.Item key="4">
              <span>Attack Surface Analysis</span>
            </Menu.Item>
			<Menu.Item key="5">
              <span>Black Duck</span>
            </Menu.Item>
          </Menu>
        </Sider>
    </div>
    );
  }
};
export default commonSlider;

