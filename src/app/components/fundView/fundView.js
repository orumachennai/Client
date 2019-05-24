import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CommonPageHeader from '../commonHeader';
import homeTableView from './../home/homeTableView';
import { getTable } from './../../common/common';
import { FUND_TABLE_METADATA_COLUMNS, DATA } from './fundConfig';
class fundView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnMetadata : FUND_TABLE_METADATA_COLUMNS,
      data: DATA
    }
  }

  render() {

    return (
      <div>
        <div >
          <CommonPageHeader />
        </div>
        <div className="common-content-layout">
          {getTable(this.state.data, this.state.columnMetadata)}
        </div>
      </div>
    );
  }
};


export default fundView;
