import React from 'react'

import { Thead, ColorDiv, Carimg, Td } from '../Style/Style'
export default function Cars({ CarData, GetData }) {
    async function serverDeleter(Data) {
        await fetch('http://localhost:3333/cars', {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify({
                plate: `${Data.plate}`,
            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => (json.error === true ? console.log(json) : GetData()))
    }

    return (
        <table>
            <Thead>
                <tr>
                    <th>brandModel</th>
                    <th>placa</th>
                    <th>year</th>
                    <th>Url</th>
                    <th>cor</th>
                    <th>excluir</th>
                </tr>
            </Thead>
            <tbody>{CarData.length >= 1 ? (CarData.map((Cars, idx) => (
                <tr className='' key={idx}><Td>{Cars.brandModel}</Td><Td>{Cars.plate}</Td><Td>{Cars.year}</Td><Td><Carimg src={Cars.image} alt="Vehicle" /></Td><Td><ColorDiv className="cor" style={{ backgroundColor: `${Cars.color}` }}></ColorDiv></Td><Td><button data-user={idx} onClick={(e) => (serverDeleter(CarData[e.target.dataset.user]))}>X</button></Td></tr>
            ))) : <tr><Td>Nenhum carro encontrado</Td></tr>}</tbody>

        </table>
    )
}
