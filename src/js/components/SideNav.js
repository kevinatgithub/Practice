import React from 'react'
import {Link} from 'react-router-dom'

export default class SideNav extends React.Component{

    render(){
        let {links} = this.props

        return(
            <div class="list-group table-of-contents" style={{"margin-top":"1em"}}>
                {links.map((link,i) => {
                    return (
                        <Link key={i} className="list-group-item" to={link.path}>{link.title}</Link>
                    )
                })}
            </div>
        )
    }
}