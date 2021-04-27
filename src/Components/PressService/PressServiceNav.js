import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const PressServiceSidebar = () => {
    const [className, setClassName] = useState('notification');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("notification")} className ={`${className==="notification"? "active":"sidebarListItemLink"}`} to='/press-service'>E’lonlar</Link></li>
                <li className="sidebarListItem"><Link  onClick={()=>changeClassName("notification2")} className ={`${className==="notification2"? "active":"sidebarListItemLink"}`} to='/contact-press-service'>Matbuot bilan bog’lanish</Link></li>
                <li className="sidebarListItem"><Link  onClick={()=>changeClassName("notification3")} className ={`${className==="notification3"? "active":"sidebarListItemLink"}`} to='/management-statements'>Rahbariyat bayonotlari</Link></li>
            </ul>
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
            
        </div>
    )
}
export default PressServiceSidebar