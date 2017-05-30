import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LocaleProvider, Layout, Row, Col } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';

import SideNav from './SideNav';
import PageView from './PageView';


import Admin from './pages/Admin';
import Events from './pages/Events';


const Root = () => {
    const { Header, Footer, Content, Sider } = Layout;
    const links = [
        { id: 0, title: 'Administration', path: '/admin', component: Admin },
        { id: 1, title: 'Events', path: '/events', component: Events },
    ];

    return (
      <LocaleProvider locale={enUS}>
        <Router>
          <Layout>
            <Header> <h2 style={{ color: '#fff' }}>Practice React with Ant Design</h2> </Header>
            <Layout>
              <Sider>
                <SideNav links={links} />
              </Sider>
              <Content>
                <Row gutter={8} >
                  <Col span={68} >
                    <PageView links={links} />
                  </Col>
                </Row>
              </Content>
            </Layout>
            <Footer> Copyright &copy; 2017 </Footer>
          </Layout>
        </Router>
      </LocaleProvider>
    );
};

export default Root;
