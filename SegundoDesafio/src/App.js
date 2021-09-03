import { useState } from 'react'
import Aside from './components/Aside';

import Footer from './components/Footer';
import Header from './components/Header'
import Main from './components/Main';
import Menu from './components/Menu';

/*Dado dos artista */
import TopArtist from './Data/ArtistData'
//await setNews(TopArtist[position])
function App() {
  /*O valor inicial e o primeiro item pra ficar como um "placeHolder"*/
  const [news, setNews] = useState(TopArtist[0])
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <Main news={news}></Main>
      <Aside setNews={setNews} data={TopArtist}></Aside>
      <Footer></Footer>
    </>
  );
}

export default App;
