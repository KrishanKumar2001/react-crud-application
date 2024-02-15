import React, { Fragment, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContextApi } from '../../context/AuthContex';

const Menu = () => {

  let {isAuth,Logout,current_user}=useContext(authContextApi);
  //console.log(isAuth,"???");


  const IsAuth=()=>{
    return <Fragment>
                     <li>
                       <NavLink to={`/user/${current_user?.id}`} className={({isActive})=>(isActive?"active":"")}>{current_user?.name}</NavLink>
                    </li>
                     <li>
                        <figure>
                          <picture className='min-profile'>
                              <img src={current_user?.avatar}   alt={current_user?.name} />
                          </picture>
                        </figure>
                    </li>
                     <li>
                      <button onClick={()=>Logout()} className='logout-btn'>Logout</button>
                    </li>
           </Fragment>
      }

  const IsAnonymousUser=()=>{
    return <Fragment>
                  
                    <li>
                       <NavLink to="/signup" className={({isActive})=>(isActive?"active":"")}>Signup</NavLink>
                    </li>
                    
                    <li>
                       <NavLink to="/login" className={({isActive})=>(isActive?"active":"")}>Login</NavLink>
                    </li>
    </Fragment>

  }

  return (
    <section className='menu-container'>
           <article>
                 <nav>
                   <ul>
                   <li>
                       <NavLink to="/" className={({isActive})=>(isActive?"active":"")}>Home</NavLink>
                    </li>
                  
                    {
                      isAuth ===undefined || null ? <IsAnonymousUser/> :<IsAuth/>
                    }
                   </ul>
                 </nav>
           </article>
    </section>
  )
}

export default Menu