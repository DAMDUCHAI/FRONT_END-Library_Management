import {React,Fragment} from 'react'
import { NavLink } from 'react-router-dom'
export default function SidebarAdmin() {
  return (
    <Fragment>
    <div className="sidebar" style={{backgroundColor: '#b2bec3'}}>
<ul className="sidebar-nav">
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/book-manager">   <i className="fas fa-tachometer-alt " style={{marginRight:'20px'}}  />Book Management</NavLink>
 
  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/category-manager"><i className="fab fa-accusoft" style={{marginRight:'20px'}}  />Category Management</NavLink>

  </li>
  <li className="sidebar-nav-item">
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/author-manager"><i className="fas fa-address-card" style={{marginRight:'20px'}}  ></i>Author Management</NavLink>

  </li>

  <li className="sidebar-nav-item" >
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/publisher-manager"><i className="fas fa-spinner" style={{marginRight:'20px'}}  />Publisher Management</NavLink>
  </li>
 

  <li className="sidebar-nav-item" >
  <NavLink activeClassName="sidebar-nav-item active-sidebar"  
className="nav-link" to="/reader-manager"><i className="fas fa-spinner" style={{marginRight:'20px'}}  />Reader Management</NavLink>
  </li>
</ul>
</div>
  </Fragment>
  )
}
