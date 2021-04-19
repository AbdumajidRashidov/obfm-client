import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'

const PressServiceSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/press-service'>E’lonlar</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/contact-press-service'>Matbuot bilan bog’lanish</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/management-statements'>Rahbariyat bayonotlari</Link></li>
            </ul>
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
            
        </div>
    )
}
export default PressServiceSidebar