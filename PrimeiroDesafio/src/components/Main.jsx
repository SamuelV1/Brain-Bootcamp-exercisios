import React from 'react'
import { Button } from './Button'
import SideBar from './SideBar'
export default function Main() {
    return (
        <main>
            <SideBar></SideBar>

            <div>
                <div className="News">
                    <div className="NewsHeader">
                        <h1>Donda Kanye's new album is OUT NOW</h1>
                    </div>
                    <img src="https://t2.genius.com/unsafe/0x641/https%3A%2F%2Fimages.genius.com%2Fada799d26cf4adbfff8648dff4fa50ec.900x500x1.jpg" alt="Kanye with a red jacket" />
                    <p>Listen a bit off the album here with us:</p>
                    <iframe title='DondaAlbum' src="https://open.spotify.com/embed/album/340MjPcVdiQRnMigrPybZA?theme=0" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

            </div>

            <div className='Showcase'>
                <Button>Secondary</Button>
                <Button primary>primary</Button>
            </div>

        </main>
    )
}
