import React from 'react'
const Home = () => {
    return ( 
        <div>
           
           <div className='w-full border border-black flex gap-1 mt-16'>
                <div className='w-1/2  border border-red-700 flex flex-col gap-8'>
                    <div>
                    <h1 className='text-3xl text-primary font-bold'>Olá, eu sou</h1>
                    <h1 className='text-3xl'>Desenvolvedor Frontend</h1>
                    </div>
                    <div className='flex w-full border gap-8'>
                        <div className="flex w-1/2 border border-black rounded-md justify-center flex-col items-center p-5 gap-8 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-file-earmark-person" viewBox="0 0 16 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                            </svg>
                            <h1 className='text-4xl text-primary font-bold'>Curriculo</h1>
                            <p className='text-lg'>Veja aqui minha formação e experiencia</p>
                        </div>
                        <div className="flex w-1/2 border border-black rounded-md justify-center flex-col items-center p-5 gap-5 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                            <h1 className='text-4xl text-primary font-bold'>Projetos</h1>
                            <p className='text-lg'>Acompanhe aqui meus projetos web</p>
                        </div>
                       
                    </div>
                </div>
                <div className='w-1/2 border border-red-700'>
                    video
                </div>
                
           </div>
           <div className='w-full border border-black mt-16 flex justify-between'>
            k
            <div className='flex justify-between gap-4'>
                <div>
                    <h1 className='text-primary font-bold'>Email</h1>
                    <p>cesarmanciosilva@gmail.com</p>
                </div>
                <div>
                    <h1 className='text-primary font-bold'>Telefone</h1>
                    <p>cesarmanciosilva@gmail.com</p>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Home;