import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Login from './Login';

class Wrapper extends Component {
  state = {
    isLogin: true,
  };

  componentDidMount() {
    const token = window.localStorage.getItem('token');
    if (token)
      this.setState({ isLogin: true });

    // check auth
  }

  render() {
    const { children } = this.props;
    const { isLogin } = this.state;

    if (!isLogin)
      return <Login />

    return (
      <Layout style={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Sidebar />
        <Layout>
          <Header />
          {children}
        </Layout>
      </Layout>
    );
  }
}

export default Wrapper;