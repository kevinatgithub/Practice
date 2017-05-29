import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import SideNav from './SideNav';
import PageView from './PageView';


import Admin from './pages/Admin';
import Events from './pages/Events';

const Root = () => {
    const links = [
        { id: 0, title: 'Administration', path: '/admin', component: Admin },
        { id: 1, title: 'Events', path: '/events', component: Events },
    ];

    return (
      <div className="container">

        <Router>
          <div className="page-header" id="banner">
            <div className="row">
              <div className="col-lg-3">
                <SideNav links={links} />
              </div>
              <div className="col-lg-9">
                <PageView links={links} />
              </div>
            </div>
          </div>
        </Router>
      </div>

    );
};

export default Root;
