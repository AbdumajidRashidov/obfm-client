import React ,  { useState } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const Sidebar = (props) => {
    const [className, setClassName] = useState('');
    const changeClassName = ()=>{
         setClassName('active')
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link onClick={()=>changeClassName()} className={props.isClicked ? `sidebarListItemLink ${className}` : `sidebarListItemLink`} to='/'>Fond yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName()} className={props.isClicked ? `sidebarListItemLink ${className}` : `sidebarListItemLink`} to='/uzbnews'>O’zbekiston yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName()} className={props.isClicked ? `sidebarListItemLink ${className}` : `sidebarListItemLink`} to='/worldnews'>Jahon yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName()} className={props.isClicked ? `sidebarListItemLink ${className}` : `sidebarListItemLink`} to='/saxovatnews'>Saxovat  yangiliklari</Link></li>
            </ul>
            <p><Link  to='/volunteer-help' className="volunteerHelp">yordam bermoq</Link></p>
            <p><Link  to='/gethelp' className="getHelp">yordam olmoq</Link></p>
            
        </div>
    )
}
export default Sidebar