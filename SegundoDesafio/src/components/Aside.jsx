import React from 'react'
import TopArtist from '../Data/ArtistData'
import { H1 } from './TextMaker'

export default function Aside(props) {
    async function triggerHandler(e) {
        let position = e.target.dataset.user
        // aconteceu algums problemas com o useState e asycronidade então resolvi fazer uma função stateless e de
        await props.parentCallback(position)
    }
    return (
        <aside className='TopArtist'>
            <H1>TopNews</H1>
            <ol>
                {TopArtist.map((Artist, idx) => (
                    <li data-user={idx} onClick={(e) => triggerHandler(e)} key={idx}>{Artist.title}</li>
                ))}
            </ol>

        </aside>
    )
}
