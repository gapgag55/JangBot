import React, { Component } from 'react';
import { Form, Input, DatePicker, TimePicker, Select, Button } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class HomeworkForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

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
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="ชื่อวิชา"
        >
          {getFieldDecorator('subject', {
            rules: [{
              type: 'text', message: 'The input is not valid E-mail!',
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
              type: 'text', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
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
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="assignment">Assignment</Option>
              <Option value="quiz">Quiz</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="วันกำหนดส่ง"
        >
          {getFieldDecorator('date-picker', {
            rules: [{
              type: 'object', required: true, message: 'Please select time!'
            }]
          })(
            <DatePicker />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="เวลากำหนดส่ง"
        >
          {getFieldDecorator('time-picker', {
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
          {getFieldDecorator('beforehand', {
            rules: [{
              type: 'number', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Record</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(HomeworkForm);