import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import Dashboard from './Dashboard';
import Notes from './Notes';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1'),
  getItem('Notes', '2'),
];

const GlobalLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState<string>('1');
  const handleMenuSelect = ({ key }: { key: React.Key }) => { setSelectedMenuKey(key.toString()); };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onSelect={handleMenuSelect}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          {selectedMenuKey === '1' ? (
            <Dashboard/>
          ) : selectedMenuKey === '2' ? (
            <Notes/>
          ) : null}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Projects ©{new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;