import React ,  { useState } from 'react';
import 'materialize-css'

const   HelpingButtons = (props) => {
    const [className, setClassName] = useState('');
    const changeClassName = ()=>{
         setClassName('active')
    }
    return (
        <div className="sidebar">
            <p><a  href='/volunteer-help' className="volunteerHelp">yordam bermoq</a></p>
            <p><a  href='/gethelp' className="getHelp">yordam olmoq</a></p>
        </div>
    )
}
export default HelpingButtons