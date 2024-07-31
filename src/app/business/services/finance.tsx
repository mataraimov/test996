import React from 'react';
import { List, Card } from 'antd';

const FinancialServices = () => {
  const services = [
    { title: 'Управление счетами', description: 'Простое управление бизнес счетами.' },
    { title: 'Автоматизация бухгалтерии', description: 'Упрощение процессов бухгалтерии.' },
    { title: 'Кредитование и инвестиции', description: 'Возможности для развития бизнеса.' },
  ];

  return (
    <div>
      <h1>Финансовые инструменты</h1>
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

export default FinancialServices;
