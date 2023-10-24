import React from 'react'
import { useRef,useLayoutEffect,useState } from 'react'
import {Link,NavLink} from 'react-router-dom'
import Cesar from '../assets/Cesar.png'

const navigationBtn = [
    {id:1,text:"Inicio",href:"/"},
    {id:2,text:"Projetos",href:"/projects"},
    {id:3,text:"Curriculo",href:"/resume"}
]
const iconBtn =[
    {id:4,text:'Linkedin'},
    {id:5,text:'Github'},
    {id:6,text:'Whatsapp'},
]


const Navbar = () => {
    const [stateProf,setStateProf] = useState(false)
    return ( 
        <nav className='mt-3 bg-white  w-full p-2 px-[6%] 2xl:px-[10%] flex justify-end items-center mb-4 relative'>
            <div onClick={()=>setStateProf(true)} onMouseLeave={()=>setStateProf(false)}className={stateProf == true ? 'transition profile shadow shadow-zinc-400 flex flex-col bg-white p-3 gap-2 rounded-md  z-10 absolute left-[6%] top-0 transition-all ease-in-out duration-1000':"transition transition-all ease-in-out duration-1000 profile hover:shadow hover:shadow-zinc-400 flex flex-col bg-white p-3 gap-2 rounded-md  z-10 absolute left-[6%] top-0"}>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <img src={Cesar} className='w-10 h-10 rounded-full border  border-black' alt="foto de cesar" />
                    <div className='h-6 border border-primary '></div>
                    <h2 className='text-lg flex gap-1'>César <span className='hidden sm:block'> Mâncio Silva</span></h2>
                </div>
                <div className={stateProf == true ? 'listProfile w-full flex flex-col bg-white':' bg-white listProfile w-full flex flex-col hidden'}>
                    <p className='w-full border-b pb-1'>cesarmanciosilva@gmail</p>
                    <div className=' mt-3   rounded-lg w-full'>
                        
                        <ul >
                            {iconBtn && iconBtn.map(btn=>(
                                <li key={btn.id} className='py-2 cursor-pointer transition-all hover:pl-3 hover:border-l-2 hover:border-primary'>{btn.text}</li>
                            ))}
                            
                        </ul>
                    </div>

                </div>
            </div>
            <ul className='gap-3 flex'> 
                {navigationBtn && navigationBtn.map(btn=>(
                    
                    <NavLink key={btn.id} to={btn.href} 
                    className={({isActive})=>
                    isActive ? 'cursor-pointer border-black p-2 px-4 md:px-8 rounded bg-primary text-white font-bold':'cursor-pointer border-black p-2 px-4 md:px-8 rounded hover:bg-primary hover:bg-opacity-50 hover:text-white'}
                    >{btn.text}</NavLink>
                
                ))}
            </ul>
           
        </nav>
    );
}
{/* <NavLink key={btn.id} to={btn.href} onClick={navClick}><li key={btn.id} className={btn.selected == true ? ' cursor-pointer border-black p-2 px-8 rounded bg-primary text-white font-bold':'cursor-pointer border-black p-2 px-8 rounded hover:bg-primary hover:bg-opacity-50 hover:text-white'}>{btn.text}</li></NavLink> */}
export default Navbar;
