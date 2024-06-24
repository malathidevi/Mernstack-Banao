import React, { useState } from 'react';
import Navbar from './Navbar';
import GroupList from './GroupList';
import GroupDetails from './GroupDetails';
import Footer from './Footer';
import './App.css';

function App() {
  const [groups] = useState([
    { id: 1, name: "Group 1", description: "Description for Group 1", members: 10, creationDate: "2022-01-01", activities: "Activity 1" },
    { id: 2, name: "Group 2", description: "Description for Group 2", members: 20, creationDate: "2022-02-01", activities: "Activity 2" },
    { id: 3, name: "Group 3", description: "Description for Group 3", members: 30, creationDate: "2022-03-01", activities: "Activity 3" },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="background-container">
        <div className="container">
          
          <h1 className="page-header">Group Page Header</h1>
          <GroupList groups={groups} onGroupSelect={handleGroupSelect} />
          <GroupDetails selectedGroup={selectedGroup} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
