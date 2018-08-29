import React from 'react';
import { Layout } from 'antd';
import Wrapper from '../components/Wrapper';

const { Content } = Layout;

const Home = () => (
  <Wrapper>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      Log
    </Content>
  </Wrapper>
);

export default Home;