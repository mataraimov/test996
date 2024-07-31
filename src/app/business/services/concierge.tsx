import React from 'react';
import { List, Card } from 'antd';

const ConciergeServices = () => {
  const services = [
    { title: 'Организация поездок', description: 'Планирование и бронирование бизнес поездок.' },
    { title: 'Техническая поддержка', description: 'Поддержка в решении технических вопросов.' },
    { title: 'Административные услуги', description: 'Помощь в организации и ведении бизнеса.' },
  ];

  return (
    <div>
      <h1>Консьерж-услуги</h1>
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

export default ConciergeServices;
