import React, { Component } from 'react';
import { Table, Spin } from 'antd';

class TableLine extends Component {
  columns = () => {
    const { onDelete } = this.props;

    return [{
      title: 'Line ID',
      dataIndex: 'lineId',
      key: 'lineId',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'ประเภท',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: '#',
      key: 'action',
      render: (record) => (
        <span>
          <a href="javascript:;" onClick={() => onDelete(record._id)}>ลบ</a>
        </span>
      ),
    }];
  }

  render() {
    const { data, isLoading } = this.props;

    if (isLoading)
      return (<Spin />)

    return (
      <Table columns={this.columns()} dataSource={data} />
    );
  }
}

export default TableLine;