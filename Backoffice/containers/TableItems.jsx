import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [{
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
}, {
  title: 'เวลากำหนดส่ง',
  dataIndex: 'time',
  key: 'time',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">แก้ไข</a>
      <Divider type="vertical" />
      <a href="javascript:;">ลบ</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  subject: 'Artificial Intelligent',
  description: 'Assignment week 1',
  type: 'assignment',
  date: '31 สิงหาคม 2561',
  time: '23:55 น.'
}, {
  key: '1',
  subject: 'Computer Network',
  description: 'Assignment week 1',
  type: 'quiz',
  date: '5 กันยายน 2561',
  time: '23:55 น.'
}];

class TableItems extends Component {
  render() {
    return (
      <Table columns={columns} dataSource={data} />
    );
  }
}

export default TableItems;