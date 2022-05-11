import './App.css';
import { useState } from 'react';
//components
import Menu from './components/Menu';
import Table from './components/Table';

function App() {
  const [menuAtivo, setNemuAtivo] = useState(1);
  const files = [
    { id: 1, name: "One Piece", type: "Anime", status: "Assistindo" },
    { id: 2, name: "Um amor para recordar", type: "Filme", status: "Assistido" },
    { id: 3, name: "Lúcifer", type: "Série", status: "Assistido" },
    { id: 4, name: "Friends", type: "Série", status: "Assistido" },
    { id: 5, name: "How I Met Your Mother", type: "Série", status: "Assistido" },
    { id: 6, name: "The Witcher", type: "Série", status: "Assistido" },
    { id: 7, name: "Naruto", type: "Anime", status: "Assistido" },
    { id: 8, name: "Ao No Exorcist", type: "Anime", status: "Assistido" },
    { id: 9, name: "My Dress Up Darling", type: "Anime", status: "Assistido" },
    { id: 10, name: "Baki", type: "Anime", status: "Para assistir" },
    { id: 11, name: "Até o último homem", type: "Filme", status: "Assistido" },
    { id: 12, name: "Três Ninjas em Apuros", type: "Filme", status: "Assistido" },
    { id: 13, name: "O plano perfeito", type: "Filme", status: "Assistido" },
    { id: 14, name: "A origem", type: "Filme", status: "Assistido" },
    { id: 15, name: "Eu, eu mesmo & Irene", type: "Filme", status: "Assistido" },
    { id: 16, name: "Hotel Transilvânia 2", type: "Filme", status: "Assistido" }]

  return (
    <div className="App">
      <header className="">
      </header>
      <div className="App-menu">
        {console.log("Qual é o menu que está ativo ? " + menuAtivo)}
        <Menu />
      </div>
      <div className="App-body">
        <Table files={files} />
      </div>
    </div>
  );
}

export default App;
