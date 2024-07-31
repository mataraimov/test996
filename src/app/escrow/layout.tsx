'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './escrow.module.css';

const { Header, Content, Footer } = Layout;

const EscrowLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="996kg" />
      </div>
      <Menu mode="horizontal" className={styles.menu}>
        <Menu.Item key="services">
          <Link href="/escrow/services">Услуги</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className={styles.content}>{children}</Content>
    <Footer className={styles.footer}>
      <p>© 2024 996kg. Все права защищены.</p>
    </Footer>
  </Layout>
);

export default EscrowLayout;
