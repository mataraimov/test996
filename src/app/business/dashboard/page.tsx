'use client';
import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { UserOutlined, DollarCircleOutlined } from '@ant-design/icons';
import styles from '../layout.module.css';

const BusinessDashboard = () => {
  return (
    <div>
      <h1>Панель управления бизнесом</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Активные пользователи" value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Выручка"
              value={128000}
              prefix={<DollarCircleOutlined />}
              suffix="KGS"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Новые заказы" value={93} prefix={<UserOutlined />} />
          </Card>
        </Col>
      </Row>
      <div className={styles.charts}>
        {/* Add charts and graphs here using Ant Design Charts */}
      </div>
    </div>
  );
};

export default BusinessDashboard;
