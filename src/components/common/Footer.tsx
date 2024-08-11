// common/Footer.tsx
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter: React.FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    ©2024 SuperApp Inc. All rights reserved.
    <span href="/privacy-policy">Privacy Policy</span> | <span href="/terms">Terms of Service</span>
  </Footer>
);

export default AppFooter;
