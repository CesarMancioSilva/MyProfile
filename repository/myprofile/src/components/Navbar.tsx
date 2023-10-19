import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const navigationBtn = [
    {id:1,text:"Inicio",href:"/"},
    {id:2,text:"Projetos",href:"/projects"},
    {id:3,text:"Curriculo",href:"/contact"}
]

const Navbar = () => {
    
    return ( 
        <nav className='mt-3 bg-white  w-full p-2 px-[6%] flex justify-between items-center mb-4 '>
            <div className="flex items-center gap-2">
                <div className='w-10 h-10 rounded-full border border-black'></div>
                <div className='h-6 border border-primary'></div>
                <h2 className='text-lg'>César Mâncio Silva</h2>
            </div>
            <ul className='gap-3 flex'>
                {navigationBtn && navigationBtn.map(btn=>(
                    
                    <NavLink key={btn.id} to={btn.href} 
                    className={({isActive})=>
                    isActive ? 'cursor-pointer border-black p-2 px-8 rounded bg-primary text-white font-bold':'cursor-pointer border-black p-2 px-8 rounded hover:bg-primary hover:bg-opacity-50 hover:text-white'}
                    >{btn.text}</NavLink>
                
                ))}
            </ul>

        </nav>
    );
}
{/* <NavLink key={btn.id} to={btn.href} onClick={navClick}><li key={btn.id} className={btn.selected == true ? ' cursor-pointer border-black p-2 px-8 rounded bg-primary text-white font-bold':'cursor-pointer border-black p-2 px-8 rounded hover:bg-primary hover:bg-opacity-50 hover:text-white'}>{btn.text}</li></NavLink> */}
export default Navbar;
