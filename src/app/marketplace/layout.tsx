'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './marketplace.module.css';

const { Header, Content, Footer } = Layout;

const MarketplaceLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Content className={styles.content}>{children}</Content>
  </Layout>
);

export default MarketplaceLayout;
