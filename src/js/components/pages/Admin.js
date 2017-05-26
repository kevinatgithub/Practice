import React from 'react'
import {Link} from 'react-router-dom'

import events from '../SampleEvents'

export default class Admin extends React.Component{

    render(){
        return(
            <div>
                
                <div className="row">
                    <div className="col-lg-8">
                        <h4>Administrator</h4>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eius cumque, quos aut aliquam atque explicabo, sint delectus fuga quas, repudiandae iste veniam dicta voluptatibus tenetur veritatis sunt laborum rem.
                    </div>
                    <div className="col-lg-4">
                        <h4>Events</h4>
                        {events().map((event,i) => {
                            return (<li key={i}><Link to={"/events/"+event.id}>{event.title}</Link></li>)
                        })}
                    </div>
                </div>
                <ul>
                </ul>
            </div>
        )
    }
}