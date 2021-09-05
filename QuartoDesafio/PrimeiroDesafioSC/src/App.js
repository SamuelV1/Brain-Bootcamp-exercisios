import { useState } from 'react'
import Aside from './components/Aside';

import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import Menu from './components/Menu';

/*Dado dos artista */
import TopArtist from './Data/ArtistData'
import { Corpo } from './style/Style';

import { Reset } from 'styled-reset';
function App() {
  /*O valor inicial e o primeiro item pra ficar como um "placeHolder"*/
  const [news, setNews] = useState(TopArtist[0])
  return (
    <>
      <Reset></Reset>
      <Corpo>
        <Header></Header>
        <Menu></Menu>
        <Main news={news}></Main>
        <Aside setNews={setNews} data={TopArtist}></Aside>
        <Footer></Footer>
      </Corpo>
    </>
  );
}

export default App;
