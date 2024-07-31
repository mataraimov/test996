'use client';
import React from 'react';
import { List, Card, Button } from 'antd';
import Link from 'next/link';
import styles from './products.module.css';

const ProductListing = () => {
  const products = [
    { id: 1, title: 'Продукт 1', description: 'Описание продукта 1', price: '1000 KGS' },
    { id: 2, title: 'Продукт 2', description: 'Описание продукта 2', price: '2000 KGS' },
    // Add more products here
  ];

  return (
    <div>
      <h1>Товары</h1>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <Card
              title={product.title}
              actions={[
                <Link href={`/marketplace/products/${product.id}`} key="view">
                  <Button type="primary">Посмотреть</Button>
                </Link>,
                <Button type="default" key="add-to-cart">
                  Добавить в корзину
                </Button>,
              ]}
            >
              <p>{product.description}</p>
              <p>{product.price}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductListing;
