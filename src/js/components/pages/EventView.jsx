import React from 'react';
import PropTypes from 'prop-types';
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
          <div className="panel panel-default">
            <div className="panel-body">
              <p>ID : {event.id}</p>
              <h4>{event.title}</h4>
              <p><i>{event.description}</i></p>
            </div>
          </div>
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
