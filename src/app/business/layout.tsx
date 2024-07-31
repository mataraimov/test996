'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './layout.module.css';

const { Header, Content, Footer } = Layout;

const BusinessLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Content className={styles.content}>{children}</Content>
  </Layout>
);

export default BusinessLayout;
