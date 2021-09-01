import React from 'react'
import { useState } from 'react'
import TopArtist from '../Data/ArtistData'
import MateriaMaker from './MateriaMaker'
import { H1 } from './TextMaker'

export default function Main() {
    const [news, setNews] = useState(<MateriaMaker img={TopArtist[0].img} artist={TopArtist[0].artist} content={TopArtist[0].content} title={TopArtist[0].title}></MateriaMaker>)

    function ModalHandler(e) {
        let index = e.target.dataset.user
        setNews(<MateriaMaker artist={TopArtist[index].artist} content={TopArtist[index].content} title={TopArtist[index].title} img={TopArtist[index].img} />)
    }
    return (
        <main>

            <div>
                {news}
            </div>
            <div className='TopArtist'>

                <H1>TopNews</H1>
                <ol>
                    {TopArtist.map((Artist, idx) => (
                        <li data-user={idx} onClick={(e) => ModalHandler(e)} key={idx}>{Artist.title}</li>
                    ))}
                </ol>
            </div>
        </main>
    )
}
