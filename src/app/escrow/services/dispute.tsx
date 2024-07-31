import React from 'react';
import { List, Card } from 'antd';

const DisputeResolution = () => {
  const services = [
    { title: 'Арбитраж', description: 'Процедуры для арбитража и урегулирования споров.' },
    { title: 'Медиаторы', description: 'Профессиональные медиаторы для ведения переговоров.' },
    { title: 'Финансовые консультации', description: 'Консультации по финансовым вопросам.' },
  ];

  return (
    <div>
      <h1>Разрешение споров</h1>
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

export default DisputeResolution;
