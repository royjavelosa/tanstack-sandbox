// eslint-disable-next-line no-unused-vars
import React from 'react';
import SimpleTable from './components/SimpleTable';
import PinHoverTable from './components/PinHoverTable';
import './App.css'; 
import GroupedTable from './components/GroupedTable';

function App(){
  return (
    <div className="App">

      <h1>TanStack Sandbox</h1>
      <GroupedTable/>
      ----------------
      <SimpleTable/>
      <PinHoverTable/>

    </div>
  )
}

export default App;
