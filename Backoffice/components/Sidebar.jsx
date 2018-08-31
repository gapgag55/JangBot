import React from 'react';
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

const Sidebar = ({ router }) => (
  <Sider theme="light">
    <div className="logo" />
    <Menu
      theme="light"
      mode="inline"
      selectedKeys={[router.pathname]}
    >
      <Menu.Item key="/">
        <Link href="/">
          <a>
            <Icon type="book" />
            <span>ระบบการบ้าน</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/notification">
        <Link href="/notification">
          <a>
            <Icon type="notification" />
            <span>ระบบแจ้งข่าวสาร</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/line">
        <Link href="/line">
          <a>
            <Icon type="meh-o" />
            <span>Line</span>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default withRouter(Sidebar);