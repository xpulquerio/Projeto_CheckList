import './App.css';
//hooks
import { useState } from 'react';

//data
import { files } from './data/files.js';

//components
import Menu from './components/Menu';
import Table from './components/Table';



function App() {
  const [menuAtivo, setNemuAtivo] = useState(1);
  //const files = useState(files);
  //console.log(files);

  return (
    <div className="App">
      <header className="">
      </header>
      <div className="App-menu">
        <Menu />
      </div>
      <div className="App-body">
        <Table files={files} />
      </div>
    </div>
  );
}

export default App;
