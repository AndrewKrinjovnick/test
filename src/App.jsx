import React from "react";
import "normalize.css";
import "antd/dist/antd.min.css";
import "./stylesheet/global.scss";
import { Layout } from "antd";
import MainHeader from "./components/MainHeader";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <Layout className="layout">
      <MainHeader />
      <AppRouter />
    </Layout>
  );
}

export default App;
