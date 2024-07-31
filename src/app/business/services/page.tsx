'use client';
import React from 'react';
import { Card, Row, Col } from 'antd';
import Link from 'next/link';
import styles from './services.module.css';

const BusinessServicesOverview = () => {
  const services = [
    {
      key: 'concierge',
      title: 'Консьерж-услуги',
      description: 'Управление бизнес-процессами',
      link: '/business/services/concierge',
    },
    {
      key: 'finance',
      title: 'Финансовые инструменты',
      description: 'Автоматизация бухгалтерии и кредитование',
      link: '/business/services/finance',
    },
    {
      key: 'marketing',
      title: 'Маркетинг и продвижение',
      description: 'Стратегии и анализ рынка',
      link: '/business/services/marketing',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Бизнес Услуги</h1>
      <Row gutter={16}>
        {services.map((service) => (
          <Col span={8} key={service.key}>
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

export default BusinessServicesOverview;
