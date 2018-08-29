import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import request from '../utilities/request';
import api from '../config/api';

const FormItem = Form.Item;

class HomeworkForm extends Component {
  componentDidMount() {
    this.getSetting();
  }

  getSetting = async () => {
    const { form } = this.props;

    // const { statusCode, data } = await request.get(api.url.settings);
    // if (statusCode) {
    //   const { channel_access_token, group_id } = data[0];

    //   form.setFieldsValue({
    //     channel_access_token,
    //     group_id
    //   });
    // }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log(values);

        this.getSetting();
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
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
          offset: 5,
        },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="Line Channel Access Token"
        >
          {getFieldDecorator('channel_access_token', {
            rules: [{
              message: 'The input is not valid E-mail!',
            }]
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Group ID"
        >
          {getFieldDecorator('group_id', {
            rules: [{
              message: 'The input is not valid E-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Save</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(HomeworkForm);