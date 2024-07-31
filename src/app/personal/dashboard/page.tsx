'use client';
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { WalletOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styles from '../personal.module.css';

const PersonalDashboard = () => {
  return (
    <div>
      <h1>Панель управления</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Баланс" value={15000} prefix={<WalletOutlined />} suffix="KGS" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Текущие заказы" value={12} prefix={<ShoppingCartOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Новые уведомления" value={5} prefix={<ShoppingCartOutlined />} />
          </Card>
        </Col>
      </Row>
      <div className={styles.charts}>
        {/* Add charts and graphs here using Ant Design Charts */}
      </div>
    </div>
  );
};

export default PersonalDashboard;
