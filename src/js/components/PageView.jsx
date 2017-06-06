import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Admin from './admin/Admin';

const PageView = ({ links }) => (
  <div style={{ padding: 24, minHeight: 450 }}>
    <Route exact path="/" component={Admin} />
    {links.map(page => (
      <Route key={page.id} path={page.path} component={page.component} />
    ))}
  </div>
);

PageView.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        component: PropTypes.component,
    })).isRequired,
};

export default PageView;
