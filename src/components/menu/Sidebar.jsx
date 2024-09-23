import React, { useState } from 'react';
import './sidebar.css'; // Import the sidebar-specific CSS

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? '>' : '<'}
      </button>
      <ul className="sidebar-items">
        <li>Home</li>
        <li>Dashboard</li>
        <li>Settings</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;
