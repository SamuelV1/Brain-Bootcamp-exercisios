import React, { useState, useEffect } from 'react'
import Cars from './Components/Cars'
/*Import de estilos StyledComponent */
import { Form, Input, Label, Main, Submiter, Titulo, TituloSpan, MobileSpan, Tittle } from './Style/Style'

export default function App() {

  const [info, setInfo] = useState({ Marca: "", Ano: "", Placa: "", Url: "", Cor: "" })
  /*um set data pra info local e outro pra info do servidor e mais um pra identificar erros*/
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
    <Main>
      <Titulo className="tittle">
        <Tittle>Simple Register</Tittle>
        <TituloSpan id='hoverhint'>Hover Us ;)</TituloSpan>
        <MobileSpan id='Mobile'>Tap us ;)</MobileSpan>
      </Titulo>
      <Form className='form-style-8' action="" onSubmit={onSubmitTask}>
        <Label htmlFor="Nome">Marca</Label>
        <Input
          required
          placeholder="Marca"
          type="text"
          name='Marca'
          className="inputs"
          onChange={myChangeHandler}
        />
        <Label htmlFor="Email">Ano</Label>
        <Input placeholder="Ano" type="number" id='Ano' name='Ano' min="1900" max="9999" required onChange={myChangeHandler} />

        <Label htmlFor="Placa">Placa</Label>
        {/*Btw não faz sentido algum usar regex pra mudar a formação da placa sendo que as novas placas não seguem mais aquele formato... tornaria o codigo inutilizavel */}
        <Input placeholder="numero" type="text" required minLength="7" maxLength="7" onChange={myChangeHandler} name="Placa" />

        <Label htmlFor="Foto">Url Foto Veiculo</Label>
        <Input type='url' placeholder='Url' name='Url' onChange={myChangeHandler} />

        <Label htmlFor="Cor">Cor do Veiculo</Label>
        <Input type="color" name="Cor" required onChange={myChangeHandler} />
        <div><Submiter type="submit" /> </div>
      </Form>
      <Cars CarData={CarData} GetData={GetData}></Cars>
    </Main>
  )
}