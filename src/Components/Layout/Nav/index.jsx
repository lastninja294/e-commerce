import React from "react";
import { Layout, Menu } from "antd";
import { NavLink, Link } from "react-router-dom";

import { menus } from "@/shared/constants/AppConst";
import styles from "@/Components/Layout/Nav/Nav.module.scss";
import Logo from "@/assets/logo.webp";

const { Header } = Layout;

function Nav() {
  return (
    <Header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </Link>
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        className={styles.menuList}
        items={menus.map((menu) => {
          return {
            key: menu.id,
            label: (
              <NavLink
                to={menu.path}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {menu.name}
              </NavLink>
            ),
            icon: menu.icon,
          };
        })}
      />
    </Header>
  );
}

export default Nav;
