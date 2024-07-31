'use client';
import React from 'react';
import { Layout, Carousel, Row, Col, Button, Menu } from 'antd';
import { PhoneOutlined, HomeOutlined, UserOutlined, GiftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/homePage.module.css';
import Card from 'antd/es/card';
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Content className={styles.content}>
        <Menu mode="vertical" className={styles.menu}>
          <Menu.Item key="home">
            <Link href="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="business">
            <Link href="/business/services">Бизнес</Link>
          </Menu.Item>
          <Menu.Item key="personal">
            <Link href="/personal/services">Личные услуги</Link>
          </Menu.Item>
          <Menu.Item key="marketplace">
            <Link href="/marketplace/products">Маркетплейс</Link>
          </Menu.Item>
          <Menu.Item key="escrow">
            <Link href="/escrow/services">Эскроу</Link>
          </Menu.Item>
        </Menu>
        <Carousel autoplay className={styles.carousel}>
          <div>
            <img src="https://mtscdn.ru/upload/rk/7f1/952kh476_main.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://mtscdn.ru/upload/rk/5b7/952kh476_main.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="https://mtscdn.ru/upload/rk/071/Desktop-952kh476.jpg" alt="Slide 3" />
          </div>
        </Carousel>
        <div className={styles.infoBlocks}>
          <div className="mb-0">
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  hoverable
                  cover={<HomeOutlined className="text-white text-4xl p-4" />}
                >
                  <Card.Meta
                    title={<span className="text-white">Бизнес</span>}
                    description={<span className="text-white">Информация о бизнес услугах</span>}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  hoverable
                  cover={<PhoneOutlined className="text-white text-4xl p-4" />}
                >
                  <Card.Meta
                    title={<span className="text-white">Номер</span>}
                    description={<span className="text-white">Управление номерами</span>}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  hoverable
                  cover={<UserOutlined className="text-white text-4xl p-4" />}
                >
                  <Card.Meta
                    title={<span className="text-white">Клиенты</span>}
                    description={<span className="text-white">Управление клиентами</span>}
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  hoverable
                  cover={<GiftOutlined className="text-white text-4xl p-4" />}
                >
                  <Card.Meta
                    title={<span className="text-white">Бонусы</span>}
                    description={<span className="text-white">Бонусные программы</span>}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.createAccountSection}>
          <Button className="mr-2" type="primary" size="large">
            <Link href="/business/signup">Создать бизнес аккаунт</Link>
          </Button>
          <Button type="default" size="large">
            <Link href="/login">Вход в кабинет</Link>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
