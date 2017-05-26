import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import SideNav from './SideNav'
import PageView from './PageView'


import Admin from './pages/Admin'
import Events from './pages/Events'

export default class Root extends React.Component{

    // Router Links and Components
    routeProps(){
        return [
            { title : "Administration", path : "/admin", component : Admin },
            { title : "Events", path : "/events", component : Events }
        ]
    }

    render(){

        let links = this.routeProps()

        return (
            <div class="container">

                <Router>
                    <div class="page-header" id="banner">
                        <div className="row">
                            <div class="col-lg-3">
                                <SideNav links={links} />
                            </div>
                            <div class="col-lg-9">
                                <PageView links={links} />
                            </div>
                        </div>
                    </div>
                </Router>
            </div>

        )
    }
}
