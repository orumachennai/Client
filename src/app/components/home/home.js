import React, { Component, PropTypes } from 'react';
import { hashHistory, Link } from 'react-router';
import CommonPageHeader from '../commonHeader';

class home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <div>
                <CommonPageHeader />
            </div>
        );
    }
};

export default home;
