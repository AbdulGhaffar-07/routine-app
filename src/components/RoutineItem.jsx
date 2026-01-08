import React from 'react';

function RoutineItem({ routine, onEdit, onDelete, onMarkComplete }) {
  const handleMarkComplete = () => {
    onMarkComplete(routine.id);
  };

  return (
    <div className={`routine-item ${routine.completed ? 'completed' : ''}`}>
      <div className="routine-content">
        <h3 className="routine-title">{routine.title}</h3>
        {routine.description && (
          <p className="routine-description">{routine.description}</p>
        )}
        <div className="routine-time">
          <span>🕐</span>
          <span>{routine.time}</span>
        </div>
        <div className="routine-category">{routine.category}</div>
      </div>
      <div className="routine-actions">
        <button
          className={`btn ${routine.completed ? 'btn-warning' : 'btn-success'} btn-small`}
          onClick={handleMarkComplete}
        >
          {routine.completed ? 'Undo' : 'Done'}
        </button>
        <button
          className="btn btn-secondary btn-small"
          onClick={() => onEdit(routine)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-small"
          onClick={() => onDelete(routine.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default RoutineItem;