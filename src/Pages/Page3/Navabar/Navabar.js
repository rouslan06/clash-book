// import React, {useState} from 'react';
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// // import {Link} from 'react-router-dom';

// function Navabar() {
//     const [sidebar, setSidebar] = useState (false)
//     const showSidebar = () => setSidebar(!sidebar)

//   return (
//     <>
//         <div className='navbar'>
//             <link to='#' className='menu-bar'>
//                 <FaIcons.FaBars onClick={showSidebar}/>
//             </link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//             <ul className='nav-menu-items'>
//                 <li className="navbar-toggle">
//                     <link to="#" className='menu-bars'>
//                         <AiIcons.AiOutlineClose />
//                     </link>
//                 </li>
//             </ul>
//         </nav>
//     </>
//   )
// }

// export default Navabar