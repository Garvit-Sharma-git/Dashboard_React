// import React from 'react'
// import 
//  {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
//  from 'react-icons/bs'

// function Header({OpenSidebar}) {
//   return (
//     <header className='header'>
//         <div className='menu-icon'>
//             <BsJustify className='icon' onClick={OpenSidebar}/>
//         </div>
//         <div className='header-left'>
//             <BsSearch  className='icon'/>
//         </div>
//         <div className='header-right'>
//             <BsFillBellFill className='icon'/>
//             <BsFillEnvelopeFill className='icon'/>
//             <BsPersonCircle className='icon'/>
//         </div>
//     </header>
//   )
// }

// export default Header



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <h1>Dashboard</h1>
      </div>
      
      <div className="navbar-right">
        <form className="search-form">
          <input 
            type="text" 
            placeholder="Search..." 
            aria-label="Search" 
            className="search-input"
          />
        </form>
        
        <FontAwesomeIcon icon={faBell} className="icon bell-icon" />
        <FontAwesomeIcon icon={faUserCircle} className="icon profile-icon" />
      </div>
    </header>
  );
}

export default Navbar;
