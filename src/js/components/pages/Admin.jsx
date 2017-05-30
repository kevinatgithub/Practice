import React from 'react';
import { Row, Col, Card } from 'antd';

import EventTitle from './EventTitle';
import events from '../SampleEvents';

const Admin = () => (
  <Row gutter={16}>
    <Col span={16}>
      <Card title="Administrator">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius cumque,
        quos aut aliquam atque explicabo,
        sint delectus fuga quas, repudiandae iste
        veniam dicta voluptatibus tenetur veritatis sunt laborum rem.
      </Card>
    </Col>
    <Col span={4}>
      <Card title="Events">
        {events().map(event => (
          <li key={event.id}><EventTitle event={event} /></li>
        ))}
      </Card>
    </Col>
  </Row>
);

export default Admin;
