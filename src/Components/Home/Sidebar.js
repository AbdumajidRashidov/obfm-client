import React ,  { useState } from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const Sidebar = (props) => {
    const [className, setClassName] = useState('sidebarListItemLink1');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink1")} className ={`${className==="sidebarListItemLink1"? "active":"sidebarListItemLink"}`}  to='/'>Fond yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink2")} className ={`${className==="sidebarListItemLink2"? "active":"sidebarListItemLink"}`} to='/uzbnews'>O’zbekiston yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink3")} className ={`${className==="sidebarListItemLink3"? "active":"sidebarListItemLink"}`} to='/worldnews'>Jahon yangiliklari</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink4")} className ={`${className==="sidebarListItemLink4"? "active":"sidebarListItemLink"}`} to='/saxovatnews'>Saxovat  yangiliklari</Link></li>
            </ul>
        </div>
    )
}
export default Sidebar