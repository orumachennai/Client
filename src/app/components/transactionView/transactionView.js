import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import CommonPageHeader from '../commonHeader';
import homeTableView from './../home/homeTableView';
import { getTable } from './../../common/common';
import { TRANSACTION_TABLE_METADATA_COLUMNS, DATA } from './transactionConfig';
import { fetchTransactionDetails } from './../../Actions/getBlackDuckReportAction';

class transactionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnMetadata : TRANSACTION_TABLE_METADATA_COLUMNS,
      data: DATA
    }
  }

  componentDidMount()
  {
    fetchTransactionDetails();
  }

  render() {

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <div>
        <div >
          <CommonPageHeader />
        </div>
        <div className="common-content-layout">
          {getTable(this.state.data, this.state.columnMetadata, rowSelection)}
        </div>
      </div>
    );
  }
};


export default transactionView;
