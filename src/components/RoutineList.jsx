import React from 'react';
import RoutineItem from './RoutineItem';

function RoutineList({ routines, onEdit, onDelete, onMarkComplete }) {
  if (routines.length === 0) {
    return (
      <div className="routine-list empty">
        <p>No routines yet. Create one to get started!</p>
      </div>
    );
  }

  // Sort routines by time
  const sortedRoutines = [...routines].sort((a, b) => {
    return a.time.localeCompare(b.time);
  });

  return (
    <div className="routine-list">
      {sortedRoutines.map((routine) => (
        <RoutineItem
          key={routine.id}
          routine={routine}
          onEdit={onEdit}
          onDelete={onDelete}
          onMarkComplete={onMarkComplete}
        />
      ))}
    </div>
  );
}

export default RoutineList;