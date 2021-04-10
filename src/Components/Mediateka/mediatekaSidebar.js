import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const MediatekaSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link className="sidebarListItemLink active" to='/mediateka'>Fotogalereya</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/videogalereya'>Videogalereya</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/audiogalereya'>Audiogalereya</Link></li>
            </ul>
            <p><Link  to='/volunteer-help' className="volunteerHelp">yordam bermoq</Link></p>
            <p><Link  to='/gethelp' className="getHelp">yordam olmoq</Link></p>
            
        </div>
    )
}
export default MediatekaSidebar