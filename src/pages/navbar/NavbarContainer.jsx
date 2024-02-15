
import { useContext } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import { authContextApi } from '../../context/AuthContex';
const NavbarContainer = () => {

  // let {auth}=useContext(authContextApi);
  // console.log(auth,"$$$$$$$$$");
  return (
    <section id="navbar">
         <article className='nav-container'>
             <Logo></Logo>
             <Menu></Menu>
         </article>
    </section>
  )
}

export default NavbarContainer