import React from 'react';
import {DefaultPlayer as Video} from 'react-html5video'
import introVideo from '../videos/teste.mp4'
import 'react-html5video/dist/styles.css'
import thumb from '../assets/thumb.png'
const VideoPlayer = () => {
    return (
       
       <Video loop poster={thumb} className='w-[430px] rounded-md m-auto mt-4'>
        
        <source src={introVideo} type='video/webm'/>
       </Video>
    );
};

export default VideoPlayer;