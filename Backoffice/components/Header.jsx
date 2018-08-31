import React from 'react';
import { Layout, Icon } from 'antd';

const Header = () => (
  <Layout.Header style={{ background: '#fff', textAlign: 'right', paddingRight: 20 }}>
    <span>
      <a href="javascript:;" onClick={() => {
        window.localStorage.removeItem('token');
      }}>ออกจากระบบ</a>
    </span>
  </Layout.Header>
);

export default Header;