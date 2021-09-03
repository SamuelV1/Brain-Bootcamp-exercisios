import React from 'react'
import { H1 } from './TextMaker'

export default function Aside({ setNews, data }) {
    async function triggerHandler(e) {
        let position = e.target.dataset.user
        /* 
        a data nesse caso foi passada como prop e aqui so foi usada o titulo logo em seguida devolvendo o 
        */
        await setNews(data[position])
        // o await e pra evitar que quebre com spamClick
    }
    return (
        <aside className='TopArtist'>
            <H1>TopNews</H1>
            <ol>
                {data.map((Artist, idx) => (
                    <li data-user={idx} onClick={(e) => triggerHandler(e)} key={idx}>{Artist.title}</li>
                ))}
            </ol>

        </aside>
    )
}
