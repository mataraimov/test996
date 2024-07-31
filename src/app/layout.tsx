'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Ensure your global styles are correctly imported
import { Layout, Menu, Dropdown, Button, Input } from 'antd';
import {
  DownOutlined,
  UserOutlined,
  GlobalOutlined,
  SearchOutlined,
  EnvironmentTwoTone,
} from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/layout.module.css';

const { Header, Content, Footer } = Layout;
const inter = Inter({ subsets: ['latin'] });

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link href="/profile">Профиль</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link href="/settings">Настройки</Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <Link href="/logout">Выйти</Link>
      </Menu.Item>
    </Menu>
  );

  const languageMenu = (
    <Menu>
      <Menu.Item key="ru">Русский</Menu.Item>
      <Menu.Item key="en">English</Menu.Item>
    </Menu>
  );

  const cityMenu = (
    <Menu>
      <Menu.Item key="bishkek">
        <EnvironmentTwoTone />
        <span className="ml-2">Бишкек</span>
      </Menu.Item>
      <Menu.Item key="osh">
        <EnvironmentTwoTone />
        <span className="ml-2">Ош</span>
      </Menu.Item>
      <Menu.Item key="jalalabad">
        <EnvironmentTwoTone />
        <span className="ml-2">Джалал-Абад</span>
      </Menu.Item>
      <Menu.Item key="karakol">
        <EnvironmentTwoTone />
        <span className="ml-2">Каракол</span>
      </Menu.Item>
      <Menu.Item key="naryn">
        <EnvironmentTwoTone />
        <span className="ml-2">Нарын</span>
      </Menu.Item>
      <Menu.Item key="talas">
        <EnvironmentTwoTone />
        <span className="ml-2">Талас</span>
      </Menu.Item>
      <Menu.Item key="batken">
        <EnvironmentTwoTone />
        <span className="ml-2">Баткен</span>
      </Menu.Item>
      <Menu.Item key="kadamjay">
        <EnvironmentTwoTone />
        <span className="ml-2">Кадамжай</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <img src="https://i.ibb.co/2MdV5BN/photo-2024-07-29-14-06-01.jpg" alt="996kg" />
        </div>
        <div className={styles.citySelector}>
          <Dropdown overlay={cityMenu} trigger={['click']} className={styles.dropdown}>
            <Button type="text" icon={<EnvironmentTwoTone />}>
              Бишкек <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div className={styles.navigation}>
          <Input
            size="large"
            placeholder="Поиск"
            prefix={<SearchOutlined />}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.actions}>
          <Dropdown overlay={menu} trigger={['click']} className={styles.dropdown}>
            <Button type="text" icon={<UserOutlined />}>
              Аккаунт <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={languageMenu} trigger={['click']} className={styles.dropdown}>
            <Button type="text" icon={<GlobalOutlined />}>
              Язык <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        <p>© 2024 996kg. Все права защищены.</p>
        <div className={styles.footerLinks}>
          <Link href="/terms">Условия использования</Link>
          <Link href="/privacy">Политика конфиденциальности</Link>
        </div>
      </Footer>
    </Layout>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
