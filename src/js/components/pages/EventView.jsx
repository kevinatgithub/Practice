import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import events from '../SampleEvents';

export default class EventView extends React.Component {

    constructor(param) {
        super(param);

        this.state = {
            events: events(),
        };
    }

    render() {
        const { id } = this.props.match.params;
        const event = this.state.events.find(e => e.id === (id * 1));

        return (
          <Card title={event.title} >
            <p>ID : {event.id}</p>
            <p><i>{event.description}</i></p>
          </Card>
        );
    }
}

EventView.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }).isRequired,
};
