import React, { Component } from 'react';
import { Layout, Form, notification, Button, Modal } from 'antd';
import moment from 'moment';
import Wrapper from '../containers/Wrapper';
import HomeworkForm from '../containers/HomeworkForm';
import TableHomework from '../containers/TableHomework';
import request from '../utilities/request';
import api from '../config/api';

const { Content } = Layout;

class Home extends Component {
  state = {
    isLoading: true,
    isUpdate: false,
    isModal: false,
    data: []
  };

  componentDidMount() {
    this.getHomework();
  }

  getHomework = async () => {
    this.setState({
      isLoading: true,
      isModal: false,
    });

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

  deleteHomework = async (id) => {
    const { statusCode } = await request.remove(api.url.homework, id);
    const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

    notification.open({
      message: message
    });

    this.getHomework();
  }

  triggerModal = () => {
    const { form } = this.props;
    const { isModal, isUpdate } = this.state;
    this.setState({
      isModal: !isModal,
    });

    // Prevent Modal Animation
    setTimeout(() => {
      if (isUpdate) {
        this.setState({
          isUpdate: false,
        });

        form.resetFields();
      }
    }, 200)
  }

  handleEdit = async (data) => {
    const { form } = this.props;

    this.setState({
      isUpdate: true,
      isModal: true,
    }, () => {
      setTimeout(() => {
        form.setFieldsValue({
          id: data._id,
          subject: data.subject,
          description: data.description,
          type: data.type,
          date: moment(data.date),
          time: moment(data.time),
          appointment: data.appointment
        });
      }, 150)
    });
  }

  handleOk = () => {
    const { isUpdate } = this.state;

    if (isUpdate)
      return this.updateHomework();
    return  this.addHomework();
  }

  render() {
    const { form } = this.props;
    const { data, isLoading, isUpdate, isModal } = this.state;

    return (
      <Wrapper>
        <Content style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280,
          textAlign: 'right',
        }}>
          <Button
            type="primary"
            size="large"
            onClick={this.triggerModal}
            style={{ marginBottom: 20 }}
          >เพิ่มการบ้าน</Button>
          <Modal
            title="เพิ่มการบ้าน"
            visible={isModal}
            onOk={this.handleOk}
            onCancel={this.triggerModal}
            okText={isUpdate ? 'อัปเดต' : 'เพิ่ม'}
            cancelText='ยกเลิก'
          >
            <HomeworkForm
              form={form}
            />
          </Modal>
          <Layout style={{ background: '#fff' }}>
            <TableHomework
              isLoading={isLoading}
              data={data}
              onEdit={this.handleEdit}
              onDelete={this.deleteHomework}
            />
          </Layout>
        </Content>
      </Wrapper>
    );
  }
}

export default Form.create()(Home);