'use client';
import React from 'react';
import { List, Card, Button } from 'antd';
import styles from '../marketplace.module.css';

const CartOverview = () => {
  const cartItems = [
    { id: 1, title: 'Продукт 1', price: '1000 KGS' },
    { id: 2, title: 'Продукт 2', price: '2000 KGS' },
    // Add more cart items here
  ];

  return (
    <div>
      <h1>Корзина</h1>
      <List
        itemLayout="horizontal"
        dataSource={cartItems}
        renderItem={(item) => (
          <List.Item actions={[<Button type="link">Удалить</Button>]}>
            <List.Item.Meta title={item.title} description={item.price} />
          </List.Item>
        )}
      />
      <div className={styles.total}>
        <h3>Итого: 3000 KGS</h3>
        <Button type="primary">Оформить заказ</Button>
      </div>
    </div>
  );
};

export default CartOverview;
