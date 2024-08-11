'use client';
import React from 'react';
import { Layout, Carousel, Row, Col, Button, Menu } from 'antd';
import { PhoneOutlined, HomeOutlined, UserOutlined, GiftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import styles from '../styles/homePage.module.css';
import Card from 'antd/es/card';
const { Content } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Content className={styles.content}>
        <Menu mode="vertical" className={styles.menu}>
          <Menu.Item key="home">
            <Link href="/">Главная</Link>
          </Menu.Item>
          <Menu.Item key="business">
            <Link href="/pro">Бизнес</Link>
          </Menu.Item>
          <Menu.Item key="personal">
            <Link href="/marketplace/products">Маркетплейс</Link>
          </Menu.Item>
          <Menu.Item key="escrow">
            <Link href="/aboutus">О сервисе</Link>
          </Menu.Item>
        </Menu>
        <Carousel autoplay className={styles.carousel}>
          <div>
            <img src="https://mtscdn.ru/upload/rk/071/Desktop-952kh476.jpg" alt="Slide 1" />
          </div>
          <div>
            <img src="https://mtscdn.ru/upload/rk/071/Desktop-952kh476.jpg" alt="Slide 2" />
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
                    title={
                      <Link href="/pro" className="text-white">
                        Бизнес
                      </Link>
                    }
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
                    title={
                      <Link href="/profile" className="text-white">
                        Номер
                      </Link>
                    }
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
                    title={
                      <Link href="/office" className="text-white">
                        Клиенты
                      </Link>
                    }
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
                    title={
                      <Link href="/pro" className="text-white">
                        Бонусы
                      </Link>
                    }
                    description={<span className="text-white">Бонусные программы</span>}
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.createAccountSection}>
          <Button className="mr-2" type="primary" size="large">
            <Link href="/pro">Создать бизнес аккаунт</Link>
          </Button>
          <Button type="primary" size="large">
            <Link href="/marketplace">Перейти в маркетплейс</Link>
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
