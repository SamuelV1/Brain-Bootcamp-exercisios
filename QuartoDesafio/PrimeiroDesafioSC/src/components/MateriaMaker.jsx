import React from 'react'
import { H1 } from './TextMaker'

export default function MateriaMaker(props) {

    return (
        <div>
            <div className="News">
                <div className="NewsHeader">
                    <H1>{props.title}</H1>
                </div>
                {props.content}
                <img src={props.img} alt="Artist quoted" />
                <p>{props.artist}</p>
            </div>
        </div>
    )
}
