import styled from 'styled-components'

export const Corpo = styled.div`
  line-height: 1;
    font-family: 'Kanit', sans-serif;
    word-break: break-all;
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
`

export const Cabeça = styled.header`
@media(max-width: 660px){
        #Log{
            display: none;
        }
    }
    background-color: #ffff64;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1{
        @media(max-width: 660px){
           display: none;
        }
        font-size: 1.8em;
    }

    .Register{
        display: flex;
    }
`

export const MMenu = styled.div`
     
        display: flex;
       position: absolute;

        height: 100%;
        width: 100%;
        top: 0%;
        bottom: 0%;
        #Menu{
            .network{
                display: none;
            }
            
            display: flex;
            #MenuLinks{
                align-items: baseline;
            }
            ul{
                margin-top: 50%;
                display: flex;
                flex-direction: column;
                li{
                    margin-top: 1em;
                    justify-content: center;
                    p{
                        font-size: 2em;
                    }
                }
            }
        }
    
`
export const Register = styled.nav`
      
`
export const Transparente = styled.div`

           background-color: black;
           opacity: 0.5;
           height: 100%;
           
        img{
            width: 25px;
            height: 1.5em;
            opacity: 1;
        }

`

export const Mopener = styled.div`
 @media (max-width: 660px){
            display: flex;
        }
        display: none;
        :hover{
            cursor: pointer;
        }
        img{
            width: 50px;
            height: 1.5em;
        }
`
export const Logo = styled.div`

        :hover{
            cursor: pointer;
        }
        svg{
            height: 1.5em;
            width: 126px;
            
        }

`

/*Parte do menu (preto que tbm vira menu mobile) */

export const MenuBar = styled.div`
  background-color: #121212;
    color: #ffffff;
    width: 100%;
   
    @media(max-width: 660px){
        display: none;
    }
`
export const MenuLinks = styled.div` 
        display: flex;
        justify-content: center;
        font-weight: bolder;
        align-items: center;
        height: 50px;
        .network{
            #CloseMenu{
                display: none;
            }
        }
        ul{display: flex;}
       
        li{ 
            border-left: 1px solid rgb(255, 255, 255);
           cursor: pointer;
            display: flex;
            align-items: center;
            p{
                margin-left: 2.250em; 
                margin-right: 2.250em;
                font-size: 1em;
                
            }
        }

        svg{
            height: 0.875em;
            width: 20px;
            fill: white;
        }
    

`
/*Main */

export const MainContainer = styled.main`
@media (max-width: 660px){
        display: flex;
        width: 100%;
        height: 100%;
        overflow: scroll;
        align-items: center;
        justify-content: center;
    }
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 32.250em;

    .News{
        @media (max-width: 460px) {
            width: 20em;
        }
        margin-top: 0.9em;
        flex-grow: 4;
        flex-basis: auto;
        width: 26em;
        height: fit-content;
        background-color: #ffff64;
        word-break: normal;
       
        box-shadow: 10px 10px 5px #121212;
      -moz-box-shadow: 10px 10px 5px #121212;
      -webkit-box-shadow: 10px 10px 5px #121212;
      -khtml-box-shadow: 10px 10px 5px #121212;
        .NewsHeader{
            display: flex;
            justify-content: center;
            h1{
                font-size: 1.9em;
            }
        }
        p{
            margin-top: 0.5em;
            margin-bottom: 0.1em;
            display: flex;
            justify-content: center;
        }
        img{
            margin-top: 0.7em;
            object-fit: cover;
            width: 26em;
            height: 21em;
            @media (max-width: 460px) {
                width: 20em;
            }
        }
    }
`

export const TopNews = styled.aside`
@media (max-width: 660px){
      
       position: static;
       display: flex;
       width: 90%;
       margin-top: 2em;
       margin-left: 1em;
       border-radius: 10px;
       height: fit-content;
       padding-bottom: 0.5em;
       margin-bottom: 1em;
      
       ol{
           margin: 0;
       }
   }
   background: #ffff64;   
   h1{
       font-size: 1.3em;
   }
   position: absolute;
   left: 0%;
   top: 15%;
   width: 15em;
   height: 34em;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   align-content: center;
   align-items: center;
   word-break: normal;
   li{
       @media (max-width: 660px){
       
           margin-top: 7px;
           font-size: 1em;
       
       }
       cursor: pointer;
       margin-top: 25px;
       font-size: large;
       
   }
`
export const Feet = styled.footer`
 @media(max-width: 660px){
        display: none;
        
    }
    position: absolute;
    display: flex;
    width: 100%;
    height: fit-content;
    padding-top: 1em;
    margin-top: 1em;
    background: #121212;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    svg{
        height: 1.875em;
        width: 35px;
        fill: white;
    }
    h1{
        float: right;
       font-size: 1.2em;
        word-break: break-all;
    }
    ul{
        margin-top: 0.1em;
        display: flex;
        li{
            cursor: pointer;
            margin-right: 0.9em;
        }
    }
`
export const Botão = styled.button`

        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: #ffff64;
        color: ${props => props.outlined ? "#121212" : "black"};
        font-family: 'Kanit', sans-serif;
        padding: 0 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        cursor: pointer;
        border: 0;
        transition: filter 0.2s;

        img{
           
           height: 20px;
        }
        ${props => props.outlined ? "border: 1px solid #121212;" : ""};
       
        &:not(:disabled):hover{
            filter: brightness(0.9);
        }
        &:disabled{
            opacity: 0.6;
            cursor: not-allowed;
        }
`