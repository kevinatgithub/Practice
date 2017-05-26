import React from 'react'
import {Route,Link} from 'react-router-dom'

import events from '../SampleEvents'
import EventView from './EventView'

export default class Events extends React.Component{

    constructor(param){
        super(param)

        this.state = {events : events()}
    }

    render(){
        
        let {events} = this.state

        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Events</h3>
                    </div>
                    <hr/>
                    <div className="col-lg-6">
                        <Route path={`/events/:id`} component={EventView} />
                    </div>

                </div>
                <div className="row">

                    {events.map((event,i) => {
                        return (
                            <div className="col-lg-4" key={i}>
                                <b><Link to={"/events/"+event.id}>{event.title}</Link></b>
                                <br/>
                                {event.description.substr(0,30)}..
                                <br/>
                                <br/>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}