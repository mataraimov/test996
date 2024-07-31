import React from 'react';
import { List, Card } from 'antd';

const PersonalFinance = () => {
  const services = [
    {
      title: 'Учет доходов и расходов',
      description: 'Инструменты для управления личным бюджетом.',
    },
    { title: 'Планирование бюджета', description: 'Помощь в составлении и отслеживании бюджета.' },
    {
      title: 'Кредитные и сберегательные продукты',
      description: 'Доступ к кредитным и сберегательным программам.',
    },
  ];

  return (
    <div>
      <h1>Личные финансы</h1>
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

export default PersonalFinance;
