import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const MediatekaSidebar = () => {
    const [className, setClassName] = useState('fotogalereya');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("fotogalereya")} className ={`${className==="fotogalereya"? "active":"sidebarListItemLink"}`} to='/mediateka'>Fotogalereya</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("videogalereya")} className ={`${className==="videogalereya"? "active":"sidebarListItemLink"}`} to='/videogalereya'>Videogalereya</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("audiogalereya")} className ={`${className==="audiogalereya"? "active":"sidebarListItemLink"}`} to='/audiogalereya'>Audiogalereya</Link></li>
            </ul>
            <p><Link  to='/volunteer-help' className="volunteerHelp">yordam bermoq</Link></p>
            <p><Link  to='/gethelp' className="getHelp">yordam olmoq</Link></p>
            
        </div>
    )
}
export default MediatekaSidebar