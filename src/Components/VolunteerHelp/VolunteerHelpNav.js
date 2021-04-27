import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'
import { Collapsible, CollapsibleItem} from 'react-materialize'

const VolunteerHelpSidebar = () => {
    const [className, setClassName] = useState('notification');
    const changeClassName = (e)=>{
         setClassName(e)
    }
    return (
        <div className="sidebar">
            <ul className="sidebarList">
            <Collapsible   accordion popout>
                <CollapsibleItem
                    expanded={false}
                    header="Yordam bermoq"
                    node="div"
                    className="CollapseNav"
                >
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink1")} className ={`${className==="sidebarListItemLink1"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Ko’p farzandli oilalar</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink2")} className ={`${className==="sidebarListItemLink2"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Kam ta’minlanganlar</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink3")} className ={`${className==="sidebarListItemLink3"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Yakka-yolg’iz keksalar</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink4")} className ={`${className==="sidebarListItemLink4"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Boquvchisini yoqotgan</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink5")} className ={`${className==="sidebarListItemLink5"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Ijtimoiy himoyaga muxtoj</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink6")} className ={`${className==="sidebarListItemLink6"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Urush va mehnat faxriylari</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink7")} className ={`${className==="sidebarListItemLink7"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Tabiiy ofatdan jabrlanganlar</Link></li>
                    <li className="sidebarListItem"><Link onClick={()=>changeClassName("sidebarListItemLink8")} className ={`${className==="sidebarListItemLink8"? "active2":"sidebarListItemLink"}`} to='/volunteer-help'>Nogironligi bo’lgan shaxslarga</Link></li>
                </CollapsibleItem>
            </Collapsible>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("gethelp")} className ={`${className==="gethelp"? "active":"sidebarListItemLink"}`} to='/gethelp'>Yordam olmoq</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("gethelp2")} className ={`${className==="gethelp2"? "active":"sidebarListItemLink"}`} to='/chairtable-donations'>Ko’rsatilgan xayriyalar</Link></li>
                <li className="sidebarListItem"><Link onClick={()=>changeClassName("accounts")} className ={`${className==="accounts"? "active":"sidebarListItemLink"}`} to='/account-numbers'>Hisob raqamlari</Link></li>
            </ul>
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
            
        </div>
    )
}
export default VolunteerHelpSidebar