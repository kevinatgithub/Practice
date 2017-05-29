import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventTitle = ({ event }) => {
    const to = `/events/${event.id}`;
    return (
      <b><Link to={to}>{event.title}</Link></b>
    );
};

EventTitle.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventTitle;
