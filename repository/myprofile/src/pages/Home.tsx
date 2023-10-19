import React from 'react'
const Home = () => {
    return ( 
        <div>
           
           <div className='w-full border border-black flex gap-1 h-'>
                <div className='w-1/2  border border-red-700'>
                    <h1 className='text-3xl text-primary font-bold'>Olá, eu sou</h1>
                    <h1 className='text-3xl'>Desenvolvedor Frontend</h1>
                    <div className='flex w-full border gap-2'>
                        <div className="flex w-1/2 border border-black rounded-md justify-center">card 1</div>
                        <div className="flex w-1/2 border border-black rounded-md">card 2</div>
                    </div>
                </div>
                <div className='w-1/2 border border-red-700'>
                    video
                </div>
           </div>
        </div>
    );
}

export default Home;