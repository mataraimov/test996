'use client';
import React from 'react';
import { Card, Row, Col } from 'antd';
import Link from 'next/link';
import styles from '../personal.module.css';

const PersonalServicesOverview = () => {
  const services = [
    {
      key: 'finance',
      title: 'Личные финансы',
      description: 'Управление личными финансами',
      link: '/personal/services/finance',
    },
    {
      key: 'homeServices',
      title: 'Бытовые услуги',
      description: 'Услуги по дому и ремонту',
      link: '/personal/services/homeServices',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Личные Услуги</h1>
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

export default PersonalServicesOverview;
