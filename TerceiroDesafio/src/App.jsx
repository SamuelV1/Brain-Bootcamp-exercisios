import React, { useState, useEffect } from 'react'
import Cars from './Components/Cars'

export default function App() {

  const [info, setInfo] = useState({ Marca: "", Ano: "", Placa: "", Url: "", Cor: "" })
  /*um set data pra info local e outro pra info do servidor */
  const [CarData, setData] = useState({})
  /**/
  async function GetData() {
    await fetch(`http://localhost:3333/cars`)
      .then(response => response.json())
      .then(el => (el.length <= 0 ? setData({}) : setData(el)))
      .catch(error => console.log(error))
  }


  useEffect(() => {
    GetData()
  }, [])


  async function onSubmitTask(event) {
    event.preventDefault()
    await fetch('http://localhost:3333/cars', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        image: `${info.Url}`,
        brandModel: `${info.Marca}`,
        year: `${info.Ano}`,
        plate: `${info.Placa}`,
        color: `${info.Cor}`,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => json.error === true ? console.log(json.message) : GetData())
  }

  function myChangeHandler(event) {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  return (
    <main>
      <div className="tittle">
        <h1>Simple Register</h1>
        <span id='hoverhint'>Hover Us ;)</span>
        <span id='Mobile'>Tap us ;)</span>
      </div>


      <form className='form-style-8' action="" onSubmit={onSubmitTask}>
        <label htmlFor="Nome">Marca</label>
        <input
          required
          placeholder="Marca"
          type="text"
          name='Marca'
          className="inputs"
          onChange={myChangeHandler}
        />

        <label htmlFor="Email">Ano</label>
        <input placeholder="Ano" type="number" id='Ano' name='Ano' onChange={myChangeHandler} />

        <label htmlFor="Placa">Placa</label>
        <input placeholder="numero" type="text" onChange={myChangeHandler} name="Placa" />

        <label htmlFor="Foto">Url Foto Veiculo</label>
        <input type='url' placeholder='Url' name='Url' onChange={myChangeHandler} />

        <label htmlFor="Cor">Cor do Veiculo</label>
        <input type="color" name="Cor" onChange={myChangeHandler} />
        <div><input type="submit" /> </div>
      </form>
      <Cars CarData={CarData} GetData={GetData}></Cars>
    </main>
  )
}