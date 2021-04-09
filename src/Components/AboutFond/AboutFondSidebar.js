import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const AboutFondSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link className="sidebarListItemLink active" to='/aboutfond'>Fond haqida</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/management'>Rahbariyat</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/central-management'>Markaziy apparat</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/organization-structure'>Tashkiliy tuzilma</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/charter'>Nizom</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/resgions'>Hududiy fondlar</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/suborganizations'>Tasarrufidagi tashkilotlar</Link></li>
            </ul>
            <p><Link  to='/volunteer-help' className="volunteerHelp">yordam bermoq</Link></p>
            <p><Link  to='/gethelp' className="getHelp">yordam olmoq</Link></p>
            
        </div>
    )
}
export default AboutFondSidebar