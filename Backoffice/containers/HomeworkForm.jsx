import React, { Component } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class HomeworkForm extends Component {
  render() {
    const{ form } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 },
      },
    };

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="ชื่อวิชา"
        >
          {getFieldDecorator('subject', {
            rules: [{
              message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Select>
              <Option value="Artificial Intelligence">Artificial Intelligence</Option>
              <Option value="Business Writing">Business Writing</Option>
              <Option value="Computer Networks">Computer Networks</Option>
              <Option value="Information Storage and Retrieval">Information Storage and Retrieval</Option>
              <Option value="Introduction to Software Engineering">Introduction to Software Engineering</Option>
              <Option value="Management Information Systems">Management Information Systems</Option>
              <Option value="Parallel and Distributed Systems">Parallel and Distributed Systems</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="รายละเอียด"
        >
          {getFieldDecorator('description', {
            rules: [{
              required: true, message: 'Please input description',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ประเภท"
        >
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select>
              <Option value="assignment">Assignment</Option>
              <Option value="quiz">Quiz</Option>
              <Option value="project">Project</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="วันกำหนดส่ง"
        >
          {getFieldDecorator('date', {
            rules: [{
              type: 'object', required: true, message: 'Please select time!'
            }],
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="เวลากำหนดส่ง"
        >
          {getFieldDecorator('time', {
            rules: [{
              type: 'object', required: true, message: 'Please select time!'
            }]
          })(
            <TimePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="แจ้งเตือนล่วงหน้า"
        >
          {getFieldDecorator('appointment', {
            rules: [{
              required: true,  message: 'Please input appointment'
            }],
          })(
            <Select>
              <Option value="1">1 วัน</Option>
              <Option value="3">3 วัน</Option>
              <Option value="7">7 วัน</Option>
              <Option value="14">14 วัน</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          style={{ margin: 0 }}
        >
          {getFieldDecorator('id')(<Input type="hidden" />)}
        </FormItem>
      </Form>
    );
  }
}

export default HomeworkForm;