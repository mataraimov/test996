'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import styles from './personal.module.css';

const { Header, Content, Footer } = Layout;

const PersonalLayout = ({ children }: { children: React.ReactNode }) => (
  <Layout>
    <Content className={styles.content}>{children}</Content>
  </Layout>
);

export default PersonalLayout;
