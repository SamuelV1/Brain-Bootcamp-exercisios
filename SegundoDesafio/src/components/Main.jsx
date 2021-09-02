import React from 'react'
import { useState } from 'react'
import TopArtist from '../Data/ArtistData'
import Aside from './Aside'
import MateriaMaker from './MateriaMaker'


export default function Main() {
    const [news, setNews] = useState(<MateriaMaker img={TopArtist[0].img} artist={TopArtist[0].artist} content={TopArtist[0].content} title={TopArtist[0].title}></MateriaMaker>)

    /*Pega as informações que o 'filho' entrega (o Aside) que nesse caso e o click
    childData = valor entregue pelo side com as info da noticia clicada e usa isso para  buscar dentro do objeto qual o index equivalente desta noticia*/
    function handleCallback(childData) {
        setNews(<MateriaMaker img={TopArtist[childData].img} artist={TopArtist[childData].artist} content={TopArtist[childData].content} title={TopArtist[childData].title}></MateriaMaker>)
    }
    return (
        <main>
            <div>
                {news}
            </div>
            <Aside parentCallback={handleCallback}></Aside>
        </main>
    )
}
