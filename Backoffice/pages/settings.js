import React from 'react';
import { Layout } from 'antd';
import Wrapper from '../components/Wrapper';
import SettingForm from '../containers/SettingForm';

const { Content } = Layout;

const Home = () => (
  <Wrapper>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      <SettingForm />
    </Content>
  </Wrapper>
);

export default Home;