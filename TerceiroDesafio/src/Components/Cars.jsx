import React from 'react'
import '../Style/cars.css'

export default function Cars({ CarData, GetData }) {
    function deletarVeiculo(rowId) {
        serverDeleter(CarData[rowId])
    }
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
            <thead>
                <tr>
                    <th>brandModel</th>
                    <th>placa</th>
                    <th>year</th>
                    <th>Url</th>
                    <th>cor</th>
                    <th>excluir</th>
                </tr>
            </thead>
            <tbody>{CarData.length >= 1 ? (CarData.map((Cars, idx) => (
                <tr className='' key={idx}><td>{Cars.brandModel}</td><td>{Cars.plate}</td><td>{Cars.year}</td><td><img src={Cars.image} alt="Vehicle" /></td><td><div className="cor" style={{ backgroundColor: `${Cars.color}` }}></div></td><td><button data-user={idx} onClick={(e) => (deletarVeiculo(e.target.dataset.user))}>X</button></td></tr>
            ))) : <tr><td>Nenhum carro encontrado</td></tr>}</tbody>

        </table>
    )
}
