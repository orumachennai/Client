import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import CommonPageHeader from '../commonHeader';
import { getTable } from './../../common/common';
import {Row, Col, Layout, Menu, Breadcrumb, Icon, Dropdown, Button, Modal, Table} from 'antd';

class homeTableView extends Component {
    constructor(props) {
        super(props);
    }

//export function getTable(data, columnMetadata, className, loading= false, onChange, bordered, useFixedHeader=true)
    
    render() {  
        const columns = [{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
		}, {
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		}, {
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
		}];
		const dataSource = [{
			key: '1',
			name: 'Mike',
			age: 32,
			address: '10 Downing Street'
		}, {
			key: '2',
			name: 'John',
			age: 42,
			address: '10 Downing Street'
		}];      
        return (
            <div>
			 {getTable(dataSource, columns)}
            </div>
        );
    }
};

export default homeTableView;
