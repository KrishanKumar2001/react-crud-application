import React from 'react'
import SidebarMenu from './sidebar/SidebarMenu';
import { Outlet } from 'react-router-dom';


const Home = () => {
  return (
    <section id='course-container'>
         <article>
                <aside className='sidebar'>
                    <SidebarMenu />
                </aside>
                <aside className='content'>
                    
                </aside>
                <Outlet />
         </article>
    </section>
  )
}

export default Home