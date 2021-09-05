import React from 'react'
import MateriaMaker from './MateriaMaker'

import { MainContainer } from '../style/Style'

export default function Main({ news }) {
    /*Recebe o objeto e usando o MateriaMaker ele transforma em noticia bem simples*/
    return (
        <MainContainer>
            <div>
                {<MateriaMaker img={news.img} artist={news.artist} content={news.content} title={news.title}></MateriaMaker>}
            </div>
        </MainContainer>
    )
}
