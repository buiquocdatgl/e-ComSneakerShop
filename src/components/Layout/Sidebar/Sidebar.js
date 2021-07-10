import React from 'react'
import '../Sidebar/Sidebar.css'

import SubSidebar from '../Sidebar/SubSidebar/SubSidebar.js'

function Sidebar() {    

    const onClickCloseMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }

    return (
        <div className="sidebar">
            <div className="nav-toggle">
                <i className="fa fa-times" onClick={ onClickCloseMenu }/>
            </div>
            <SubSidebar />
        </div>
    )
}

export default Sidebar
