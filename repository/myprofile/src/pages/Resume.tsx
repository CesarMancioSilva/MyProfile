import React from 'react'
import VideoPlayer from '../components/VideoPlayer';

const dataIconList = [
    
        {type:'formação',icon:'',title:'Etec - Ensino médio regular',text:'2020 - 2022'},
        {type:'formação',icon:'',title:'Etec - Técnico em desenvolvimento de sistemas',text:'2021 - 2022'},
        {type:'formação',icon:'',title:'Wizard - Técnico em idioma norte americano',text:'2016 - 2020'},
        {type:'formação',icon:'',title:'USP - Estatistica e ciencia de dados',text:'(prestando vestibular)'},
        
        {type:'profi',icon:'',title:'Udemy - xxxxx',text:'2020 - 2022'},
        {type:'profi',icon:'',title:'Udemy - xxxxx',text:'2020 - 2022'},
        {type:'profi',icon:'',title:'Udemy - xxxxx',text:'2020 - 2022'},
        {type:'profi',icon:'',title:'Udemy - xxxxx',text:'2020 - 2022'},
        
        {type:'voluntario',icon:'',title:'Etec - Monitor de laboratório de informatica',text:'Monitoria e auxilio à alunos de desenvolvimento de sistemas em laboratório de informática - 2022'},
        {type:'voluntario',icon:'',title:'Adventista da promessa - Designer digital e gestor de transmissão ao vivo',text:'Produção de designs de publicação e thumbnail , auxilio em transmissões de live fazendo gestão de software e manutenção de aparelhos de sonoplastia'},
        {type:'voluntario',icon:'',title:'Discord - Auxilio a programadores front-end em servidor de Desenvolvimento Web',text:'Em servidores de programação em meio ao networking auxilio algumas pessoas com duvidas emm relação ao front dando opiniões e ajustes de algoritimo.'},
        
        {type:'experiencia',icon:'',title:'CarerYou - Sistema Web para auxilio de cuidadores de idosos',p1:'Neste projeto TCC do técnico de Desenvolvimento de Sistemas, pude me desenvolver em comunicação e apresentação e equipe. ', p2:'Atuando como Front-end, trabalhei em conjunto com analista de sistemas, designer UI/UX e um desenvolvedor back-end para produzir e documentar utilizando a metodologia scrum com auxilio e apoio da instituição Etec Doutora Ruth Cardoso'},

        {type:'experiencia',icon:'',title:'PointDoKaxeta.com - Sistema web para pedidos delivery',p1:'Uma plataforma web onde os clientes da baixada santista pudessem atravez de seus celulares enviar seus pedidos para entrega ou preparo para comer no local ', p2:'Atuando como Front-end e designer UX/UI juntamente com Anderson Portes no back-end, hoje ja se encontra em funcionamento'},

        
        
    
    
]

const Resume = () => {
    return ( 
        <div className=' shadow rounded-xl mt-12  shadow-zinc-400  lg  w-full'>
            <div className='w-full rounded-tl-xl rounded-tr-xl bg-primary py-4'></div>
            <div className='w-full flex'>
                <div className='w-3/5 border gap-3 flex p-3 flex-wrap'>
                    <div className='w-[calc(50%-6px)] h-fit flex flex-col flex-wrap gap-2 '>
                    <h1 className='text-2xl text-primary font-bold border-b border-primary'>Formação</h1>

                    {dataIconList && dataIconList.filter(data => data.type == 'formação').map(datafiltered=>(
                    <div className='w-full items-center flex'>
                        <div className='w-16 h-16 border border-black'></div>
                        <div className='h-16 border border-primary mx-1'></div>
                        <div className='w-[calc(100%-64px)]  break-word pr-1'>
                            <ul>
                                <li className='font-bold text-sm'>{datafiltered.title}</li>
                                <li className='text-sm'>{datafiltered.text}</li>
                            </ul>
                        </div>
                    </div>
                    ))}

                    </div>
                    <div className='w-[calc(50%-6px)] h-fit flex flex-col gap-2 '>
                    <h1 className='text-2xl text-primary font-bold border-b border-primary'>Profissionalizantes</h1>

                    {dataIconList && dataIconList.filter(data => data.type == 'profi').map(datafiltered=>(
                    <div className='w-full items-center flex'>
                        <div className='w-16 h-16 border border-black'></div>
                        <div className='h-16 border border-primary mx-1'></div>
                        <div className='w-[calc(100%-64px)]  break-word pr-1'>
                            <ul>
                                <li className='font-bold text-sm'>{datafiltered.title}</li>
                                <li className='text-sm'>{datafiltered.text}</li>
                            </ul>
                        </div>
                    </div>
                    ))}

                    </div>
                    <div className='w-[calc(50%-6px)] h-fit flex flex-col gap-2 '>
                    <h1 className='text-2xl text-primary font-bold border-b border-primary'>Experiencia</h1>

                    {dataIconList && dataIconList.filter(data => data.type == 'experiencia').map(datafiltered=>(
                    <div className='w-full  flex flex-col gap-2'>
                        
                        
                        <p className='font-bold text-sm flex  gap-2 border'><div className='w-2 h-2 bg-black rounded-full mt-[6px]'>.</div> {datafiltered.title}</p>
                        <p className='text-sm'>{datafiltered.p1}</p>
                        <p className='text-sm'>{datafiltered.p2}</p>
                        <p className='text-sm'>Pointdokaxeta.com</p>
                        
                    </div>
                    ))}

                    </div>
                    <div className='w-[calc(50%-6px)] h-fit  flex flex-col gap-3  '>
                        <h1 className='text-2xl text-primary font-bold border-b border-primary'>Trabalho voluntario</h1>

                        {dataIconList && dataIconList.filter(data => data.type == 'voluntario').map(datafiltered=>(
                         <div className='w-full items-center flex'>
                            <div className='w-16 h-16 border border-black'></div>
                            <div className='h-20 border border-primary mx-1'></div>
                            <div className='w-[calc(100%-64px)]  break-word pr-1'>
                                <ul>
                                    <li className='font-bold text-sm'>{datafiltered.title}</li>
                                    <li className='text-sm'>{datafiltered.text}</li>
                                </ul>
                            </div>
                        </div>
                        ))}
                        
                        
                            
                        
                    </div>
                    
                </div>
                <div className='w-2/5'>
                    <VideoPlayer/>
                    <h1 className='text-2xl text-primary font-bold flex justify-between border-b'>Sobre mim <span>.</span></h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel faucibus neque. Integer nec gravida nibh. Aenean lacinia tempus nisl, consectetur tempus arcu cursus eu.</p>
                </div>
            </div>
        </div>
     );
}
 
export default Resume;