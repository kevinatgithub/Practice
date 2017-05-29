import React from 'react';

import EventTitle from './EventTitle';
import events from '../SampleEvents';

const Admin = () => (
  <div>
    <div className="row">
      <div className="col-lg-8">
        <h4>Administrator</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius cumque,
        quos aut aliquam atque explicabo,
        sint delectus fuga quas, repudiandae iste
        veniam dicta voluptatibus tenetur veritatis sunt laborum rem.
      </div>
      <div className="col-lg-4">
        <h4>Events</h4>
        {events().map(event => (
          <li key={event.id}><EventTitle event={event} /></li>
        ))}
      </div>
    </div>
  </div>
);

export default Admin;
