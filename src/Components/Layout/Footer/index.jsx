import React from "react";
import { Layout } from "antd";

import styles from "./Footer.module.scss";

const { Footer: AntdFooter } = Layout;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <AntdFooter className={styles.footer}>
      Copyright © {year} - ABEZ.
    </AntdFooter>
  );
}

export default Footer;
