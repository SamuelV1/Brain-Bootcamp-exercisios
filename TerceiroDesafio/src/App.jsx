import React, { useState, useEffect } from 'react'
import Cars from './Components/Cars'

export default function App() {

  const [info, setInfo] = useState({ brandModel: "", year: "", plate: "", image: "", color: "" })
  /*um set data pra info local e outro pra info do servidor e mais um pra erros 
    Pode parecer muito mas n demanda muito
  */
  const [CarData, setData] = useState({})

  const [erro, setErro] = useState()
  /**/



  useEffect(() => {
    fetch(`http://localhost:3333/cars`)
      .then(response => response.json())
      .then(el => (el.length <= 0 ? setData({}) : setData(el)))
      .catch(error => console.log(error))

  }, [])

  /* isso poderia ser uma arrow function mas assim fica melhor visualmente
   afinal nem sempre menos linha = bom codigo*/
  function concatenar(data) {
    setData(prevState => [...prevState, data])
  }

  async function onSubmitTask(event) {
    event.preventDefault()
    await fetch('http://localhost:3333/cars', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        image: `${info.image}`,
        brandModel: `${info.brandModel}`,
        year: `${info.year}`,
        plate: `${info.plate}`,
        color: `${info.color}`,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => json.error === true ? setErro(json.message) : concatenar(info))
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
      {erro === undefined ? "" : <div className='ErrorToast'><span>{erro}</span></div>}
      <form className='form-style-8' action="" onSubmit={onSubmitTask}>
        <label htmlFor="brandModel">Marca</label>
        <input
          required
          placeholder="Marca"
          type="text"
          name='brandModel'
          className="inputs"
          onChange={myChangeHandler}
        />

        <label htmlFor="Ano">Ano</label>
        <input placeholder="Ano" type="number" id='Ano' name='year' min="1900" max="9999" required onChange={myChangeHandler} />

        <label htmlFor="Placa">Placa</label>
        {/*Btw */}
        <input id="Placa" placeholder="numero" type="text" required pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}" onChange={myChangeHandler} name="plate" />
        <span id="info">*Tudo maiusculo e sem espaço</span>
        <label htmlFor="Foto">Url Foto Veiculo</label>
        <input type='url' placeholder='Url' name='image' onChange={myChangeHandler} />

        <label htmlFor="Cor">Cor do Veiculo</label>
        <input type="color" defaultValue="#e919b5" name="color" required onChange={myChangeHandler} />
        <div><input type="submit" /> </div>
      </form>
      <Cars CarData={CarData} setData={setData} setErro={setErro} ></Cars>
    </main>
  )
}