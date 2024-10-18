import { termekLista } from './adatok';
import { useState } from 'react';
import './App.css';
import Tablazat from './components/Tablazat';
import KosarTablazat from "./components/KosarTablazat";

function App() {

  const [kosarLista, setKosarLista] = useState([]);

  function kattintas(adat){
    console.log(adat)
    const kosarbaLista=[...kosarLista, adat];
    setKosarLista(kosarbaLista)
  }

  function torles(adat){
    const ujKosarLista = kosarLista.filter(termek => termek !== adat);
    setKosarLista(ujKosarLista);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1></h1>
      </header>
      <body className='container row'>
        <article className='col-md-6'>
            <Tablazat lista={termekLista} kattintas={kattintas}/>
        </article>
        <aside className='col-md-6'>
          <h2>Kosár tartalma</h2>
          <KosarTablazat lista={kosarLista} kattintas={kattintas} torles={torles}/>
        </aside>
        <footer><p>Horváth Nauzika</p></footer>
      </body>

    </div>
  );
}

export default App;
