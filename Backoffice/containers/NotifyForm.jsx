import React, { Component } from 'react';
import { Form, Input, Select, Button, Upload, Icon, notification } from 'antd';
import request from '../utilities/request';
import api from '../config/api';

const FormItem = Form.Item;
const Option = Select.Option;

class NotifyForm extends Component {
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFieldsAndScroll(async (err, values) => {
      form.resetFields();

      if (!err) {
        const { statusCode, data } = await request.post(api.url.notification, values)
        const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

        notification.open({
          message: message,
          description: data.text
        });
      }
    });
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
          label="ประเภท"
        >
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please select your gender!' }],
            initialValue: 'text'
          })(
            <Select>
              <Option value="text">Text</Option>
              <Option value="image">Image</Option>
            </Select>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="ข้อความส่งถึง"
        >
          {getFieldDecorator('text', {
            rules: [{ message: 'Please input text!' }],
          })(
            <Input.TextArea rows={10} />
          )}
        </FormItem>
        {/* <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem> */}
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">Push Message</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(NotifyForm);