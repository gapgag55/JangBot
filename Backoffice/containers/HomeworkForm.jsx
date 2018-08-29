import React, { Component } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Button } from 'antd';
import moment from 'moment';

const FormItem = Form.Item;
const Option = Select.Option;

class HomeworkForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const { form, onSubmit, onUpdate, isUpdate } = this.props;

    if (isUpdate)
      return onUpdate(form);
   return  onSubmit(form);
  }

  render() {
    const{ form, isUpdate } = this.props;
    const { getFieldDecorator } = form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 2,
          offset: 14,
        },
        sm: {
          span: 2,
          offset: 4,
        },
      },
    };

    return (
      <Form onSubmit={this.onSubmit}>
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
            <Input />
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
          label="แจ้งเตือนล่วงหน้า (วัน)"
        >
          {getFieldDecorator('appointment', {
            rules: [{
              required: true,  message: 'Please input appointment'
            }],
          })(
            <Select>
              <Option value="3">3 วัน</Option>
              <Option value="7">7 วัน</Option>
              <Option value="14">14 วัน</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...tailFormItemLayout}
        >
          {getFieldDecorator('id')(
            <Button type="primary" htmlType="submit">
            {isUpdate ? 'Update' : 'Record'}
            </Button>
          )}
        </FormItem>
      </Form>
    );
  }
}

export default HomeworkForm;