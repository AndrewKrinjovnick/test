import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <Layout.Header>
      <Menu
        className="container"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default MainHeader;
