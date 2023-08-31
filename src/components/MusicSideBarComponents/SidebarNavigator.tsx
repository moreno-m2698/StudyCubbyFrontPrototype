import React from 'react'
import '../../CSS/sidebarNavigator.css'


function SidebarNavigator() {
  return (
    <div className='sidebar-navigator'>
        <input type='radio' name='sidebar-mode' id='albums' />
        <label htmlFor='albums'>Albums</label>
        <input type='radio' name='sidebar-mode' id='tracks' />
        <label htmlFor='tracks'>Tracks</label>
    </div>
  )
}

export default SidebarNavigator