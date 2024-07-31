import React from 'react';
import { useRouter } from 'next/router';
import { Card, Button, Descriptions } from 'antd';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock product data
  const product = {
    title: `Продукт ${id}`,
    description: `Описание продукта ${id}`,
    price: `${id}000 KGS`,
    features: ['Функция 1', 'Функция 2', 'Функция 3'],
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <Card>
        <Descriptions bordered>
          <Descriptions.Item label="Описание">{product.description}</Descriptions.Item>
          <Descriptions.Item label="Цена">{product.price}</Descriptions.Item>
          <Descriptions.Item label="Функции">{product.features}</Descriptions.Item>
        </Descriptions>
        <Button type="primary" style={{ marginTop: '20px' }}>
          Добавить в корзину
        </Button>
      </Card>
    </div>
  );
};

export default ProductDetails;
