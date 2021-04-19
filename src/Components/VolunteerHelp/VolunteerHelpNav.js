import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css'
import { Collapsible, CollapsibleItem, Icon } from 'react-materialize'

const VolunteerHelpSidebar = () => {
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
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Ko’p farzandli oilalar</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Kam ta’minlanganlar</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Yakka-yolg’iz keksalar</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Boquvchisini yoqotgan</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Ijtimoiy himoyaga muxtoj</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Urush va mehnat faxriylari</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Tabiiy ofatdan jabrlanganlar</Link></li>
                    <li className="sidebarListItem"><Link className="" to='/volunteer-help'>Nogironligi bo’lgan shaxslarga</Link></li>
                </CollapsibleItem>
            </Collapsible>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/gethelp'>Yordam olmoq</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/management'>Ko’rsatilgan xayriyalar</Link></li>
                <li className="sidebarListItem"><Link className="sidebarListItemLink" to='/central-management'>Hisob raqamlari</Link></li>
            </ul>
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
            
        </div>
    )
}
export default VolunteerHelpSidebar