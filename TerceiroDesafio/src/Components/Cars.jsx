import React from 'react'
import '../Style/cars.css'

export default function Cars({ CarData, setData, setErro }) {

    // Agora eu uso o filter pra remover o item clicado 
    async function LocalDelete(obj) {
        // filtrar os items !== ou seja se não for igual a placa que eu quero(clicada) pode passar
        const Nimbu = CarData.filter(item => item.plate !== obj.plate)
        await setData(Nimbu)
        serverDeleter(obj)
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
            .then(json => (json.error === true ? setErro(json.message) : ""))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>placa</th>
                    <th>year</th>
                    <th>Url</th>
                    <th>cor</th>
                    <th>excluir</th>
                </tr>
            </thead>
            {/*o fator de o idx ir pra dentro do botão mas tambem pra o svg e que o click e registrado no svg as vezes (grande maioria das vezes) */}
            <tbody>{CarData.length >= 1 ? (CarData.map((Cars, idx) => (
                <tr className='' key={idx}><td>{Cars.brandModel}</td><td>{Cars.plate}</td><td>{Cars.year}</td><td><img src={Cars.image} alt="Vehicle" /></td><td><div className="cor" style={{ backgroundColor: `${Cars.color}` }}></div></td><td><button data-user={idx} onClick={(e) => (LocalDelete(CarData[e.target.dataset.user]))}>X</button></td></tr>
            ))) : <tr><td>Nenhum carro encontrado</td></tr>}</tbody>

        </table>
    )
}
