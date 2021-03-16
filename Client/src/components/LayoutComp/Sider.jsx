import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "../../css/MainLayout.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const Sider = () => {
  const { Sider } = Layout;
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to={"/"}>
            <span>Inicio</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to={"/coulomb"}>
            <span>Coulomb</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to={"/tema 3"}>
            <span>Tema 3</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to={"/tema4"}>
            <span>Tema 4</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sider;
