// common/Footer.tsx
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    ©2024 SuperApp Inc. All rights reserved.
    <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
  </Footer>
);

export default AppFooter;
