import React from 'react'
import { Allmusic , users} from './Mymusic'
import Card from './props/Card'

const Sportify = () => {
  return (
    <div className='d-flex justify-content-around align-items-center'>
        {Allmusic.map((music, i)=>(
           <div>
            <Card songartist={music.SongArtist} songtitle={music.songTitle} songimage={music.SongImage}/>
           </div>
        ))}

        
    </div>
  )
}

export default Sportify