import './App.css';
//hooks
import { useState } from 'react';

//data
import { files } from './data/files.js';

//components
import Menu from './components/Menu';
import Table from './components/Table';
import Panel from './components/Panel';
import About from './components/About';




function App() {
  const [activeMenu, setActiveMenu] = useState(1);
  //const files = useState(files);
  //console.log(files);
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
