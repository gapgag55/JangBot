import React, { Component } from 'react';
import { Spin } from 'antd';
import request from '../utilities/request';
import api from '../config/api';

class LogItem extends Component {
  state = {
    isLoading: true,
    data: []
  }

  componentDidMount() {

  }

  getData = async () => {
    const { statusCode, data } = await request.post(api.url.logging)
    if (statusCode) {
      console.log(data);
    }
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading)
      return <Spin />

    return (

    );
  }
}

export default LogItem;