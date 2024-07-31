import React from 'react';
import { List, Card } from 'antd';

const MarketingServices = () => {
  const services = [
    {
      title: 'Маркетинговые стратегии',
      description: 'Разработка и внедрение маркетинговых планов.',
    },
    {
      title: 'Управление кампаниями',
      description: 'Оптимизация и управление рекламными кампаниями.',
    },
    {
      title: 'Аналитика и исследования',
      description: 'Инструменты для анализа рынка и поведения клиентов.',
    },
  ];

  return (
    <div>
      <h1>Маркетинг и продвижение</h1>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={services}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>{item.description}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default MarketingServices;
