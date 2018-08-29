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
      <Menu.Item key="/log">
        <Link href="/log">
          <a>
            <Icon type="code-o" />
            <span>ระบบสถานะ</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/settings">
        <Link href="/settings">
          <a>
            <Icon type="setting" />
            <span>การตั้งค่า</span>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
);

export default withRouter(Sidebar);