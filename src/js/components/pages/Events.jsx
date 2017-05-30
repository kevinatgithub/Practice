import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col, Card } from 'antd';

import events from '../SampleEvents';
import EventView from './EventView';
import EventTitle from './EventTitle';

export default class Events extends React.Component {

    constructor(param) {
        super(param);

        this.state = { events: events() };
    }

    render() {
        return (
          <Row gutter={16}>
            <Col span={20}>
              <Card title="Events">
                <Row gutter={16}>
                  <Col span={6}>
                    <Route path={'/events/:id'} component={EventView} />
                  </Col>
                </Row>
                <Row gutter={16}>
                  {this.state.events.map(event => (
                    <Col span={12} key={event.id}>
                      <EventTitle event={event} />
                      <br />
                      {event.description.substr(0, 30)}..
                      <br /><br />
                    </Col>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
        );
    }
}
