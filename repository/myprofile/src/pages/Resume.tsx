import React from 'react'
import VideoPlayer from '../components/VideoPlayer';
const Resume = () => {
    return ( 
        <div className=' shadow rounded-xl mt-12  shadow-zinc-400  lg  w-full'>
            <div className='w-full rounded-tl-xl rounded-tr-xl bg-primary py-4'></div>
            <div className='w-full flex'>
                <div className='w-3/5 border gap-4 flex p-4 flex-wrap'>
                    <div className='w-[calc(50%-16px)] border border-black'>
                        <h1 className='text-2xl text-primary font-bold flex justify-between border-b'>Sobre mim <span>icon</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus neque. Integer nec gravida nibh. Aenean lacinia tempus nisl, consectetur tempus arcu cursus eu.</p>
                    </div>
                    <div className='w-[calc(50%-16px)]   border border-black'>
                        <h1 className='text-2xl text-primary font-bold'>Formação</h1>
                        <ul className='w-full '>
                            <li className='w-full border flex p-2 gap-1'>
                                <div className='min-w-16 min-h-16 border'></div>
                                <div className='h-18 border border-primary '></div>
                                <ul>
                                    <li className=' font-bold'>Etec - Técnico em desenvolvimento de Sistemas</li>
                                    <li>text</li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='w-2/5'>
                    <VideoPlayer/>
                </div>
            </div>
        </div>
     );
}
 
export default Resume;