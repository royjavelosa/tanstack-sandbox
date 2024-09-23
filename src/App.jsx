import React from 'react';
import SimpleTable from './components/SimpleTable';
import PinHoverTable from './components/PinHoverTable';
import GroupedTable from './components/GroupedTable';
import Sidebar from './components/menu/Sidebar'; // Import the Sidebar component
import './App.css'; // General app styles

function App() {
  return (
    <div className="App">
      <Sidebar /> {/* Include Sidebar here */}
      <div className="main-content">
        <h1>TanStack Sandbox</h1>
        <div className="table-container">
          <GroupedTable />
        </div>
        <div>----------------</div>
        <div className="table-container">
          <SimpleTable />
        </div>
        <div className="table-container">
          <PinHoverTable />
        </div>
      </div>
    </div>
  );
}

export default App;
