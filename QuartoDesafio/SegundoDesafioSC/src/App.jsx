import React, { useState, useEffect } from 'react'
import Cars from './Components/Cars'
/*Import de estilos StyledComponent */
import { Form, Input, Label, Main, Submiter, Titulo, TituloSpan, MobileSpan, Tittle, ErroHandler, InfoSpan } from './Style/Style'

export default function App() {

  const [info, setInfo] = useState({ brandModel: "", year: "", plate: "", image: "", color: "" })
  /*um set data pra info local e outro pra info do servidor e mais um pra identificar erros*/
  const [CarData, setData] = useState([])
  /**/
  const [erro, setErro] = useState()

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
    console.log(info)
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
  // spreaddddd
  function myChangeHandler(event) {
    setInfo({ ...info, [event.target.name]: event.target.value });
  }

  return (
    <Main>
      <Titulo className="tittle">
        <Tittle>Simple Register</Tittle>
        <TituloSpan id='hoverhint'>Hover Us ;)</TituloSpan>
        <MobileSpan id='Mobile'>Tap us ;)</MobileSpan>
      </Titulo>
      {erro === undefined ? "" : <ErroHandler><span>{erro}</span></ErroHandler>}
      <Form className='form-style-8' action="" onSubmit={onSubmitTask}>
        <Label htmlFor="Nome">Marca</Label>
        <Input
          required
          placeholder="Marca"
          type="text"
          name='brandModel'
          className="inputs"
          onChange={myChangeHandler}
        />
        <Label htmlFor="Ano">Ano</Label>
        <Input placeholder="Ano" type="number" id='Ano' name='year' min="1900" max="9999" required onChange={myChangeHandler} />

        <Label htmlFor="Placa">Placa</Label>
        {/*A tag pattern Resolve a formatação da placa sem precisar controlar o input*/}
        <Input info id='Placa' placeholder="Placa Do Veiculo" pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}" type="text" required onChange={myChangeHandler} name="plate" />
        <InfoSpan>*Tudo maiusculo e sem espaço</InfoSpan>

        <Label htmlFor="Foto">Url Foto Veiculo</Label>
        <Input type='url' placeholder='Url' name='image' onChange={myChangeHandler} />

        <Label htmlFor="Cor">Cor do Veiculo</Label>
        <Input type="color" defaultValue="#e919b5" name="color" required onChange={myChangeHandler} />
        <div><Submiter type="submit" /> </div>
      </Form>
      <Cars CarData={CarData} setData={setData} setErro={setErro} ></Cars>
    </Main>
  )
}