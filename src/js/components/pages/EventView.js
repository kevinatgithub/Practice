import React from 'react'
import {Link} from 'react-router-dom'

import events from '../SampleEvents'

export default class EventView extends React.Component{

    constructor(param){
        super(param)

        this.state = {
            events : events()
        }
    }

    render(){
        let {id} = this.props.match.params,
            {events} = this.state,
            event = events.find( i => i.id == id)
        
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>ID : {event.id}</p>
                    <h4>{event.title}</h4>
                    <p><i>{event.description}</i></p>

                </div>
            </div>
        )
    }
}