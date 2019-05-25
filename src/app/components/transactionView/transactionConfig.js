import React from 'react';

export const TRANSACTION_TABLE_METADATA_COLUMNS = [
    { title: 'Receipt ID', dataIndex: 'receiptId', key: 'receiptId', editable: true },
    { title: 'Name', dataIndex: 'name', key: 'name' }, 
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Address', dataIndex: 'address', key: 'address'},
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount',  dataIndex: 'amount', key: 'amount' },
    { title: 'Split-up', dataIndex: 'splitUp', key: 'splitUp'},
    { title: 'Transaction Reference', dataIndex: 'transactionref', key: 'transactionref'},
    { title: 'Halqa', dataIndex: 'halqa', key: 'halqa'},
    { title: 'Updated By', dataIndex: 'updatedBy', key: 'updatedBy'},
    {
      title: 'Action',
      dataIndex: 'x',
      key: 'x',
      render: () => <a href="javascript:;">Update</a>,
    }
];

export const DATA = [
    {
      name: 'Shajeer',
      receiptId: 'VL',
      email: 'Relief',
      phone: 'Online',
      address: '10000',
      date: '5 June 2019',
      amount: '5000',
      splitUp: 'Shajeer',
      transactionref: '1',
      halqa: '1',
      updatedBy: ''      
    }
];