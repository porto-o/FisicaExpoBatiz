import React from "react";
import { Route, Switch } from "react-router-dom";
import "../css/MainLayout.css";
import { Layout } from "antd";

// Importación de Componentes
import Sider from "../components/LayoutComp/Sider";
import { GithubFilled } from "@ant-design/icons";


const MainLayout = (props) => {
  const { Header, Content, Footer } = Layout;
  const { routes } = props;
  return (
    <Layout>
      <Sider />
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
            <LoadRoutes routes={routes} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>ExpoBatiz 2021 &nbsp;
        <a href="https://github.com/portocreator/FisicaExpoBatiz" target="_blank" rel="noreferrer"><GithubFilled /></a>
        </Footer>
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
  );
}

export default MainLayout;
