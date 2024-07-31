import React from 'react';
import { List, Card } from 'antd';

const HomeServices = () => {
  const services = [
    { title: 'Услуги по уходу за домом', description: 'Уборка, ремонт и другие домашние услуги.' },
    { title: 'Уход за детьми', description: 'Помощь с уходом за детьми и присмотром.' },
    { title: 'Уход за пожилыми', description: 'Специальные услуги для пожилых людей.' },
  ];

  return (
    <div>
      <h1>Бытовые услуги</h1>
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

export default HomeServices;
