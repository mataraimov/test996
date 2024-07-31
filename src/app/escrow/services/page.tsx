'use client';
import React from 'react';
import { Card, Row, Col } from 'antd';
import Link from 'next/link';
import styles from '../escrow.module.css';

const EscrowServicesOverview = () => {
  const services = [
    {
      key: 'dispute',
      title: 'Разрешение споров',
      description: 'Помощь в разрешении финансовых споров',
      link: '/escrow/services/dispute',
    },
    // Add more services as needed
  ];

  return (
    <div className={styles.container}>
      <h1>Эскроу Услуги</h1>
      <Row gutter={16}>
        {services.map((service) => (
          <Col span={12} key={service.key}>
            <Link href={service.link}>
              <Card title={service.title} bordered={false}>
                {service.description}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EscrowServicesOverview;
