import React, { Component } from 'react';
import { Layout, notification } from 'antd';
import Wrapper from '../containers/Wrapper';
import TableLine from '../containers/TableLine';
import request from '../utilities/request';
import api from '../config/api';

const { Content } = Layout;

class Line extends Component {
  state = {
    isLoading: true,
    data: [],
  }

  componentDidMount() {
    this.getLineItems();
  }

  getLineItems = async () => {
    const { statusCode, data } = await request.get(api.url.line)
    if (statusCode) {
      this.setState({
        isLoading: false,
        data
      });
    }
  }

  deleteItem = async (id) => {
    const { statusCode } = await request.remove(api.url.line, id);
    const message = statusCode == 200 ? 'Send Message: Success' : 'Send Message: Fail';

    notification.open({
      message: message
    });

    this.getLineItems();
  }

  render() {
    const{ isLoading, data } = this.state;

    return (
      <Wrapper>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <TableLine
            isLoading={isLoading}
            data={data}
            onDelete={this.deleteItem}
          />
        </Content>
      </Wrapper>
    )
  }
}

export default Line;