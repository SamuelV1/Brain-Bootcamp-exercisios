import React, { useState } from 'react'
// Assets
import Menusvg from '../assets/Menusvg.svg'
import CloseMenu from '../assets/Close.svg'
import Menu from './Menu'
/*Estilos */
import { Cabeça, Logo, Mopener, MMenu, Transparente, Botão } from '../style/Style'

export default function Header() {
    const [mobileMenu, setshowMenu] = useState(false)
    // m de mobile / acabo confundindo camel case com double camel case bastante pode ter algum erro por ai
    let mMenu
    if (mobileMenu === true) {
        mMenu = <MMenu > <Menu></Menu><Transparente onClick={() => setshowMenu(!mobileMenu)}><img src={CloseMenu} alt='Botão De Fechar O Menu'></img></Transparente></MMenu>
    }

    return (
        <Cabeça>
            <h1>Genius</h1>
            {/* Esse Svg não e apenas um placeHolder agora existe um menu feito para android :)*/}
            <Mopener onClick={() => setshowMenu(!mobileMenu)}>
                <img src={Menusvg} alt="" />
            </Mopener>

            <Logo>
                <svg viewBox="0 0 100 15"><path d="M11.7 2.9s0-.1 0 0c-.8-.8-1.7-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.1-.2.2-.3.4-.5.6v.1c0 .1.1.1.1.1.4-.2.9-.3 1.4-.3 1.1 0 2.2.5 2.9 1.2h1.6c.1 0 .1-.1.1-.1V2.9c.1 0 0 0 0 0zm-.1 4.6h-1.5c-.8 0-1.4-.6-1.5-1.4.1 0 0-.1 0-.1-.3 0-.6.2-.8.4v.2c-.6 1.8.1 2.4.9 2.4h1.1c.1 0 .1.1.1.1v.4c0 .1.1.1.1.1.6-.1 1.2-.4 1.7-.8V7.6c.1 0 0-.1-.1-.1z"></path><path d="M11.6 11.9s-.1 0 0 0c-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.8.3-1.6.5-2.5.5-3.7 0-6.8-3-6.8-6.8 0-.9.2-1.7.5-2.5 0-.1-.1-.1-.2-.1h-.1C1.4 4.2.8 5.7.8 7.5c0 3.6 2.9 6.4 6.4 6.4 1.7 0 3.3-.7 4.4-1.8V12c.1 0 0-.1 0-.1zm13.7-3.1h3.5c.8 0 1.4-.5 1.4-1.3v-.2c0-.1-.1-.1-.1-.1h-4.8c-.1 0-.1.1-.1.1v1.4c-.1 0 0 .1.1.1zm5.1-6.7h-5.2c-.1 0-.1.1-.1.1v1.4c0 .1.1.1.1.1H29c.8 0 1.4-.5 1.4-1.3v-.2c.1-.1.1-.1 0-.1z"></path><path d="M30.4 12.3h-6.1c-1 0-1.6-.6-1.6-1.6V1c0-.1-.1-.1-.1-.1-1.1 0-1.8.7-1.8 1.8V12c0 1.1.7 1.8 1.8 1.8H29c.8 0 1.4-.6 1.4-1.3v-.1c.1 0 .1-.1 0-.1zm12 0c-.6-.1-.9-.6-.9-1.3V1.1s0-.1-.1-.1H41c-.9 0-1.5.6-1.5 1.5v9.9c0 .9.6 1.5 1.5 1.5.8 0 1.4-.6 1.5-1.5 0-.1 0-.1-.1-.1zm8.2 0h-.2c-.9 0-1.4-.4-1.8-1.1l-4.5-7.4-.1-.1c-.1 0-.1.1-.1.1V8l2.8 4.7c.4.6.9 1.2 2 1.2 1 0 1.7-.5 2-1.4 0-.2-.1-.2-.1-.2zm-.9-3.8c.1 0 .1-.1.1-.1V1.1c0-.1 0-.1-.1-.1h-.4c-.9 0-1.5.6-1.5 1.5v3.1l1.7 2.8c.1 0 .1.1.2.1zm13 3.8c-.6-.1-.9-.6-.9-1.2v-10c0-.1 0-.1-.1-.1h-.3c-.9 0-1.5.6-1.5 1.5v9.9c0 .9.6 1.5 1.5 1.5.8 0 1.4-.6 1.5-1.5l-.2-.1zm18.4-.5H81c-.7.3-1.5.5-2.5.5-1.6 0-2.9-.5-3.7-1.4-.9-1-1.4-2.4-1.4-4.2V1c0-.1 0-.1-.1-.1H73c-.9 0-1.5.6-1.5 1.5V8c0 3.7 2 5.9 5.4 5.9 1.9 0 3.4-.7 4.3-1.9v-.1c0-.1 0-.1-.1-.1z"></path><path d="M81.2.9h-.3c-.9 0-1.5.6-1.5 1.5v5.7c0 .7-.1 1.3-.3 1.8 0 .1.1.1.1.1 1.4-.3 2.1-1.4 2.1-3.3V1c0-.1-.1-.1-.1-.1zm12.7 7.6l1.4.3c1.5.3 1.6.8 1.6 1.2 0 .1.1.1.1.1 1.1-.1 1.8-.7 1.8-1.5s-.6-1.2-1.9-1.5l-1.4-.3c-3.2-.6-3.8-2.3-3.8-3.6 0-.7.2-1.3.6-1.9v-.2c0-.1-.1-.1-.1-.1-1.5.7-2.3 1.9-2.3 3.4-.1 2.3 1.3 3.7 4 4.1zm5.2 3.2c-.1.1-.1.1 0 0-.9.4-1.8.6-2.8.6-1.6 0-3-.5-4.3-1.4-.3-.3-.5-.6-.5-1 0-.1 0-.1-.1-.1s-.3-.1-.4-.1c-.4 0-.8.2-1.1.6-.2.3-.4.7-.3 1.1.1.4.3.7.6 1 1.4 1 2.8 1.5 4.5 1.5 2 0 3.7-.7 4.5-1.9v-.1c0-.1 0-.2-.1-.2z"></path><path d="M94.1 3.2c0 .1.1.1.1.1h.2c1.1 0 1.7.3 2.4.8.3.2.6.3 1 .3s.8-.2 1.1-.6c.2-.3.3-.6.3-.9 0-.1 0-.1-.1-.1-.2 0-.3-.1-.5-.2-.8-.6-1.4-.9-2.6-.9-1.2 0-2 .6-2 1.4.1 0 .1 0 .1.1z"></path></svg>
            </Logo>
            <nav className="Register">
                {/*feito com Sc mto mais facil minha nossa */}
                <Botão >Sign in</Botão>
                <Botão id='Log' >log in</Botão>
            </nav>
            {mMenu}
        </Cabeça>
    )
}
