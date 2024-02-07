import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";

import styles from "./App.module.css";
import "./App.font.css";

export default function App() {
  return (
    <>
      <Nav className={styles.nav} />
      <div className={styles.bodyAndFooter}>
        <div>
          <div className={styles.body}>
            <Outlet />
          </div>
        </div>
        <Footer className={styles.footer} />
      </div>
    </>
  );
}
