import { ShoppingCartOutlined, WalletFilled, WalletOutlined, ZhihuCircleFilled } from "@ant-design/icons";
import { Col, ConfigProvider, Layout, Row } from "antd";
import Link from "next/link";
import { Fragment } from "react";

import styles from './Layout.module.css';

const { Header, Footer, Content } = Layout;

type LayoutProps = {
  children: React.ReactNode
}

export default function LayoutApp({ children }: LayoutProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1b0a43',
        },
      }}
    >
      <Fragment>
        <Layout>
          <Header style={{ backgroundColor: "#cae4f9" }}>
            <Row>
              <Col span={12}>
                <div className={styles.headerContainer}>
                  <Link className={styles.titleContainer} href="/">
                    <ZhihuCircleFilled style={{ fontSize: 36 }}/>
                    <span>Art Market</span>
                  </Link>
                </div>
              </Col>
              <Col span={12}>
                <ul className={styles.nav}>
                  <li className={styles.navItem}>
                    <Link href=''>
                      <WalletOutlined style={{ fontSize: 26 }} />
                    </Link>
                  </li>
                  <li style={{ listStyleType: 'none' }}>
                    <Link href=''>
                      <ShoppingCartOutlined style={{ fontSize: 26 }} />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Header>
          <Content>
          <main>{children}</main>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Fragment> 
    </ConfigProvider>
  );
}
