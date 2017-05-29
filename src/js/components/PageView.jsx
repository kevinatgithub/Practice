import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Welcome from './pages/Welcome';

const PageView = ({ links }) => (
  <div>
    <Route exact path="/" component={Welcome} />
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
