import { Form, Checkbox, Table, Input, Select, DatePicker } from 'antd';
import React, { Component, PropTypes } from 'react';

export function getTable(data, columnMetadata, className, loading = false, onChange, bordered) {
    return <Table
        dataSource={data}
        columns={columnMetadata}
        className={className}
        loading={loading}
        onChange={onChange}
        bordered={bordered}
    />
}

export function getFormElement(labelText, value, id, onChange) {
    return (
        <div>
            <Form.Item label={labelText}> </Form.Item>
            <Input id={id} type="text" size={'medium'} onChange={onChange} value={value} style={{ width: '10%', marginRight: '3%' }} />
        </div>
    );
}

export function getFormElementWithSelect(labelText, options, id, onChange) {
    const Option = Select.Option;
    const children = [];
    for (let i = 0; i < options.length; i++) {
        children.push(<Option key={options[i]}>{options[i]}</Option>);
    }

    return (
        <div>
            <Form.Item label={labelText}> </Form.Item>
            <Select
                size='default'
                defaultValue={options[0]}
                onChange={onChange}
                style={{ width: 200 }}
            >
                {children}
            </Select>        </div>
    );
} 


export function getFormElementWithCheckBox(labelText, value, id, onChange) {
    return (
        <div>
            <Checkbox onChange={onChange}>{labelText}</Checkbox>
        </div>
    );
}

export function getFormElementWithDate(labelText, options, id, onChange) {
    return (
        <div>
            <Form.Item label={labelText}> </Form.Item>
            <DatePicker onChange={onChange} />
        </div>
    );
}



