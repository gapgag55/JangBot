import React from 'react';
import { Layout } from 'antd';
import Wrapper from '../components/Wrapper';
import NotifyForm from '../containers/NotifyForm';

const { Content } = Layout;

const Home = () => (
  <Wrapper>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      <NotifyForm />
    </Content>
  </Wrapper>
);

export default Home;