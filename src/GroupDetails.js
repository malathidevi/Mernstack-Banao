// GroupDetails.js
import React from 'react';
import './GroupDetails.css';

function GroupDetails({ selectedGroup }) {
  if (!selectedGroup) {
    return <div className="group-details">Please select a group to see the details.</div>;
  }

  return (
    <div className="group-details">
      <h2>{selectedGroup.name}</h2>
      <p><strong>Description:</strong> {selectedGroup.description}</p>
      <p><strong>Members:</strong> {selectedGroup.members}</p>
      <p><strong>Creation Date:</strong> {selectedGroup.creationDate}</p>
      <p><strong>Activities:</strong> {selectedGroup.activities}</p>
    </div>
  );
}

export default GroupDetails;
