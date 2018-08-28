import React from 'react';
import { Layout } from 'antd';
import Wrapper from '../components/Wrapper';
import HomeworkForm from '../containers/HomeworkForm';
import TableItems from '../containers/TableItems';

const { Content } = Layout;

const Home = () => (
  <Wrapper>
    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
      <Layout style={{ background: '#fff' }}>
        <HomeworkForm />
        <TableItems />
      </Layout>
    </Content>
  </Wrapper>
);

export default Home;