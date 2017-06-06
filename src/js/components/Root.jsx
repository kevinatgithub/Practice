import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';
import Layout from 'antd/lib/layout';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import 'antd/dist/antd.css';

import SideNav from './SideNav';
import PageView from './PageView';


import Admin from './admin/Admin';
import Events from './events/MyEvents';


const Root = () => {
    const { Header, Footer, Content, Sider } = Layout;
    const links = [
        { id: 0, title: 'Administration', path: '/admin', component: Admin },
        { id: 1, title: 'My Events', path: '/events', component: Events },
    ];

    return (
      <LocaleProvider locale={enUS}>
        <Router>
          <Layout>
            <Header> <h2 style={{ color: '#fff' }}>Practice React with Ant Design</h2> </Header>
            <Layout>
              <Sider breakpoint="sm" >
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
