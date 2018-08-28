import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Layout } from 'antd';

const Wrapper = ({ children }) => (
  <Layout style={{ minHeight: '100vh', width: '100vw', overflow: 'hidden' }}>
    <Sidebar />
    <Layout>
      <Header />
      {children}
    </Layout>
  </Layout>
);

export default Wrapper;