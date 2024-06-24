import React, { useState } from 'react';
import './GroupList.css';

function GroupList({ groups, onGroupSelect }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Find matching group by name or ID
    const matchingGroup = groups.find(group =>
      group.name.toLowerCase() === term.toLowerCase() ||
      group.id.toString() === term
    );
    onGroupSelect(matchingGroup || null);
  };

  return (
    <div className="group-list">
      <input
        type="text"
        className="form-control"
        placeholder="Search groups by name or ID..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default GroupList;
