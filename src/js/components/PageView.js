import React from 'react'
import {Route} from 'react-router-dom'

import Welcome from './pages/Welcome'

export default class PageView extends React.Component{
    render(){
        let {links} = this.props

        return(
            <div>
                <Route exact path="/" component={Welcome} />
                {links.map((page,i) => {
                    return (
                        <Route key={i} path={page.path} component={page.component} />
                    )
                })}
            </div>
        )
    }
}