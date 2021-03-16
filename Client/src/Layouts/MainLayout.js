import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/MainLayout.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const MainLayout = (props) => {
  const { Header, Content, Footer, Sider } = Layout;
  const { routes } = props;
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            nav 4
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <LoadRoutes routes={routes}/>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>ExpoBatiz 2021</Footer>
      </Layout>
    </Layout>
  );
};

function LoadRoutes(props) {
  //console.log(props);
  const { routes } = props;

  return (
    <Switch>
      {routes.map((route, index) => (
      <Route 
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
  ))}
    </Switch>
  )
}

export default MainLayout;
