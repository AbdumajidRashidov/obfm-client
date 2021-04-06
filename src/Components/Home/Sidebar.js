import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link className="sidebarListItemLink active" to='/fondnews'>Fond yangiliklari</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/uzbnews'>O’zbekiston yangiliklari</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/worldnews'>Jahon yangiliklari</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/saxovatnews'>Jahon yangiliklari</Link></li>
            </ul>
            <p><Link  to='/volunteer-help' className="volunteerHelp">yordam bermoq</Link></p>
            <p><Link  to='/gethelp' className="getHelp">yordam olmoq</Link></p>
            
        </div>
    )
}
export default Sidebar