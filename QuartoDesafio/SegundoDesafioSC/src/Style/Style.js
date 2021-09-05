import styled from 'styled-components'

export const Input = styled.input`
box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	outline: none;
	display: block;
	width: 8em;
	padding: 7px;
	border: none;
	border-bottom: 1px solid rgb(255, 148, 166);
	background: transparent;
	margin-bottom: 10px;
	font: 16px Arial, Helvetica, sans-serif;
	height: 45px;
`;

export const Form = styled.form`
 margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3em;
`
export const Submiter = styled.input`
    -moz-box-shadow: inset 0px 1px 0px 0px rgb(255, 148, 166);
	-webkit-box-shadow: inset 0px 1px 0px 0px  rgb(255, 148, 166);
	box-shadow: inset 0px 1px 0px 0px rgb(255, 148, 166);
	background-color: rgb(255, 148, 166);
	border: 1px solid  rgb(255, 148, 166);
	display: inline-block;
	cursor: pointer;
	color: #FFFFFF;
	font-family: 'Open Sans Condensed', sans-serif;
	font-size: 14px;
	padding: 8px 18px;
	text-decoration: none;
    text-transform: uppercase;
    margin-top: 2em;
    :hover{
        background:linear-gradient(to bottom,  rgb(255, 148, 166) 5%,  rgb(175, 114, 124) 100%);
	background-color: rgb(255, 148, 166);
    }
`
export const Label = styled.label`
font-family: 'Poppins', sans-serif;
`
export const Main = styled.main`
display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    -webkit-transition: color 2s, -webkit-transform 2s;
    transition: color 2s, transform 2s;
    @media(max-width: 660px){
    #hoverhint{
        display: none;
    }
  #Mobile{
      display: flex;
    } 
}
    :hover{
    color: rgb(255, 148, 166);
    -webkit-transform: ease-out;;
    transform: ease-out;
    cursor: pointer;
        }
`
export const MobileSpan = styled.span`
    display: none;
    font-size: 0.7em;
`
export const TituloSpan = styled.span`
font-size: 0.7em;
`
export const Thead = styled.thead`
background-color: black;
    color:  rgb(255, 148, 166);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const ColorDiv = styled.div`
  width: 2em;
    height: 2em;
`
export const Carimg = styled.img`
height: 3em;
    width: 3em;
`
export const Td = styled.td`
text-align: -webkit-center;
`
export const Tittle = styled.h1`
    margin-bottom: 0%;
`