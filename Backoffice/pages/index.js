import React, { Component } from 'react';
import { Layout, Form, notification } from 'antd';
import moment from 'moment';
import Wrapper from '../components/Wrapper';
import HomeworkForm from '../containers/HomeworkForm';
import TableItems from '../containers/TableItems';
import request from '../utilities/request';
import api from '../config/api';

const { Content } = Layout;

class Home extends Component {
  state = {
    isLoading: true,
    isUpdate: false,
    data: []
  };

  componentDidMount() {
    this.getHomework();
  }

  addHomework = () => {
    const { form } = this.props;
    const self = this;

    form.validateFieldsAndScroll(async (err, values) => {
      form.resetFields();
      if (!err) {
        const { statusCode } = await request.post(api.url.homework, values);
        const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

        notification.open({
          message: message
        });

        self.getHomework();
      }
    });
  }

  updateHomework = () => {
    const { form } = this.props;
    const self = this;

    form.validateFieldsAndScroll(async (err, values) => {
      form.resetFields();

      self.setState({
        isUpdate: false
      });

      if (!err) {
        const { statusCode } = await request.update(api.url.homework, values.id, values);
        const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

        notification.open({
          message: message
        });

        self.getHomework();
      }
    });
  }

  getHomework = async () => {
    this.setState({ isLoading: true });

    const { statusCode, data } = await request.get(api.url.homework)
    if (statusCode) {
      const convertedData = data.map((item, key) => ({
        key,
        id: item._id,
        ...item
      }));

      this.setState({
        isLoading: false,
        data: convertedData.reverse()
      });
    }
  }

  onEdit = async (data) => {
    const { form } = this.props;

    form.setFieldsValue({
      id: data._id,
      subject: data.subject,
      description: data.description,
      type: data.type,
      date: moment(data.date),
      time: moment(data.time),
      appointment: data.appointment
    });

    this.setState({
      isUpdate: true,
    });
  }

  deleteHomework = async (id) => {
    const { statusCode } = await request.remove(api.url.homework, id);
    const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

    notification.open({
      message: message
    });

    this.getHomework();
  }

  render() {
    const { form } = this.props;
    const { data, isLoading, isUpdate } = this.state;

    return (
      <Wrapper>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <Layout style={{ background: '#fff' }}>
            <HomeworkForm
              form={form}
              onSubmit={this.addHomework}
              onUpdate={this.updateHomework}
              isUpdate={isUpdate}
            />
            <TableItems
              isLoading={isLoading}
              data={data}
              onEdit={this.onEdit}
              onDelete={this.deleteHomework}
            />
          </Layout>
        </Content>
      </Wrapper>
    );
  }
}

export default Form.create()(Home);