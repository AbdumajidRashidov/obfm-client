import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'

const AboutFondSidebar = () => {
    const [className, setClassName] = useState('aboutFond');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("aboutFond")} 
                        className ={`${className==="aboutFond"? "active":"sidebarListItemLink"}`} 
                        to='/aboutfond'>Fond haqida
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("management")} 
                        className ={`${className==="management"? "active":"sidebarListItemLink"}`}  
                        to='/management'>Rahbariyat
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("central-management")} 
                        className ={`${className==="central-management"? "active":"sidebarListItemLink"}`} 
                        to='/central-management'>Markaziy apparat</Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("organization-structure")} 
                        className ={`${className==="organization-structure"? "active":"sidebarListItemLink"}`} 
                        to='/organization-structure'>Tashkiliy tuzilma</Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("charter")} 
                        className ={`${className==="charter"? "active":"sidebarListItemLink"}`} 
                        to='/charter'>Nizom</Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("resgions")} 
                        className ={`${className==="resgions"? "active":"sidebarListItemLink"}`} 
                        to='/resgions'>Hududiy fondlar
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link 
                        onClick={()=>changeClassName("suborganizations")} 
                        className ={`${className==="suborganizations"? "active":"sidebarListItemLink"}`}  
                        to='/suborganizations'>Tasarrufidagi tashkilotlar
                    </Link>
                </li>
            </ul>
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
            
        </div>
    )
}
export default AboutFondSidebar