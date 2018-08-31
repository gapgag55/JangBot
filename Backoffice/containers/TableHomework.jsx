import React, { Component } from 'react';
import { Table, Divider, Spin } from 'antd';
import moment from 'moment';

class TableHomework extends Component {
  columns = () => {
    const { onEdit, onDelete } = this.props;
    moment.locale('th');

    return [{
      title: 'ชื่อวิชา',
      dataIndex: 'subject',
      key: 'subject',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'รายละเอียด',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'ประเภท',
      dataIndex: 'type',
      key: 'type',
    }, {
      title: 'วันกำหนดส่ง',
      dataIndex: 'date',
      key: 'date',
      render: (date) => (
        moment(date).format('LL')
      )
    }, {
      title: 'เวลากำหนดส่ง',
      dataIndex: 'time',
      key: 'time',
      render: (time) => (
        moment(time).format('LT')
      )
    }, {
      title: 'แจ้งล่วงหน้า​ (วัน)',
      dataIndex: 'appointment',
      key: 'appointment',
    }, {
      title: '#',
      key: 'action',
      render: (record) => (
        <span>
          <a href="javascript:;" onClick={() => onEdit(record)}>แก้ไข</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={() => onDelete(record._id)}>ลบ</a>
        </span>
      ),
    }];
  }

  render() {
    const  { data, isLoading } = this.props;

    if (isLoading)
      return (<Spin />)

    return (
      <Table columns={this.columns()} dataSource={data} />
    );
  }
}

export default TableHomework;