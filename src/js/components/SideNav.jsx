import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideNav = ({ links }) => (
  <div className="list-group table-of-contents" style={{ marginTop: '1em' }}>
    {links.map(link => (
      <Link key={link.path} className="list-group-item" to={link.path}>{link.title}</Link>
    ))}
  </div>
);

SideNav.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        component: PropTypes.component,
    })).isRequired,
};


export default SideNav;
