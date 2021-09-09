import React from 'react'

import { Thead, ColorDiv, Carimg, Td, DeleteButton, Deletesvg } from '../Style/Style'
import deletesvg from '../assets/DeleteB.svg'

export default function Cars({ CarData, GetData }) {

    // as informações são enviada pra o servidor e ele deleta a magica do data ta la no botão que ja entrega pra essa função o data correto a ser deletado
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
                    <th>Modelo</th>
                    <th>placa</th>
                    <th>year</th>
                    <th>Url</th>
                    <th>cor</th>
                    <th>excluir</th>
                </tr>
            </Thead>
            {/*o fator de o idx ir pra dentro do botão mas tambem pra o svg e que o click e registrado no svg as vezes (grande maioria das vezes) */}
            <tbody>{CarData.length >= 1 ? (CarData.map((Cars, idx) => (
                <tr className='' key={idx}><Td>{Cars.brandModel}</Td><Td>{Cars.plate}</Td><Td>{Cars.year}</Td><Td><Carimg src={Cars.image} alt="Vehicle" /></Td><Td><ColorDiv className="cor" style={{ backgroundColor: `${Cars.color}` }}></ColorDiv></Td><Td><DeleteButton data-user={idx} onClick={(e) => (serverDeleter(CarData[e.target.dataset.user]))}><Deletesvg data-user={idx} alt='Delete Svg' src={deletesvg}></Deletesvg></DeleteButton></Td></tr>
            ))) : <tr><Td>Nenhum carro encontrado</Td></tr>}</tbody>

        </table>
    )
}
