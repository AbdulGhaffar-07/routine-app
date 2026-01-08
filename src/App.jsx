import React, { useState } from 'react';
import './App.css';
import RoutineList from './components/RoutineList';
import RoutineForm from './components/RoutineForm';
import { useRoutines } from './hooks/useRoutines';

function App() {
  const { routines, addRoutine, updateRoutine, deleteRoutine, markComplete } = useRoutines();
  const [showForm, setShowForm] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const handleAddRoutine = (routine) => {
    addRoutine(routine);
    setShowForm(false);
  };

  const handleUpdateRoutine = (routine) => {
    updateRoutine(routine);
    setSelectedRoutine(null);
  };

  const handleEditRoutine = (routine) => {
    setSelectedRoutine(routine);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setSelectedRoutine(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Daily Routine</h1>
        <p className="subtitle">Organize and track your daily activities</p>
      </header>

      <main className="app-main">
        <div className="app-container">
          {showForm ? (
            <RoutineForm
              onSubmit={selectedRoutine ? handleUpdateRoutine : handleAddRoutine}
              onCancel={handleCancelForm}
              initialRoutine={selectedRoutine}
            />
          ) : (
            <div className="routine-section">
              <div className="section-header">
                <h2>Your Routines</h2>
                <button
                  className="btn btn-primary"
                  onClick={() => setShowForm(true)}
                >
                  + Add New Routine
                </button>
              </div>
              <RoutineList
                routines={routines}
                onEdit={handleEditRoutine}
                onDelete={deleteRoutine}
                onMarkComplete={markComplete}
              />
            </div>
          )}
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Daily Routine App. Stay productive!</p>
      </footer>
    </div>
  );
}

export default App;