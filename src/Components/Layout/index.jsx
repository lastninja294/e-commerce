import React from "react";
import { Layout as AntdLayout, Space } from "antd";

import Nav from "@/Components/Layout/Nav";
import Footer from "@/Components/Layout/Footer";
import styles from "@/Components/Layout/Layout.module.scss";

const { Content } = AntdLayout;

function Layout({ children }) {
  return (
    <AntdLayout className={styles.layout}>
      <Nav />
      <Content className={styles.content}>{children}</Content>
      <Footer />
    </AntdLayout>
  );
}

export default Layout;
