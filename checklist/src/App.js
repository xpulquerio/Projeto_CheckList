import './App.css';
//hooks
import { useState, useEffect } from 'react';

//data
//import { files } from './data/files.js';

//components
import Menu from './components/Menu';
import Table from './components/Table';
import Panel from './components/Panel';
import About from './components/About';

//db
//npm i json-server para instalar
//"server": "json-server --watch data/db.json" script para conectar com o banco de dados!
const url = "http://localhost:3000/files"

  

function App() {
  const [activeMenu, setActiveMenu] = useState(1);

  const [files, setFiles] = useState([]);

  //Resgatar os dados!
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setFiles(data)
    }

    fetchData();

  }, []);
  
  function changeMenu(x){
    setActiveMenu(x)
  };

  return (
    <div className="App">
      <header className="">
      </header>
      <div className="App-menu">
        <Menu activeMenu={activeMenu} changeMenu={changeMenu}/>
      </div>
      <div className="App-body">
        {activeMenu === 1 && <Table files={files} />}
        {activeMenu === 2 && <About />}
        {activeMenu === 3 && <Panel />}
      </div>
    </div>
  );
}

export default App;
