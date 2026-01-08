import { useState, useEffect } from 'react';

const STORAGE_KEY = 'routines';

export function useRoutines() {
  const [routines, setRoutines] = useState([]);

  // Load routines from localStorage on mount
  useEffect(() => {
    const savedRoutines = localStorage.getItem(STORAGE_KEY);
    if (savedRoutines) {
      try {
        setRoutines(JSON.parse(savedRoutines));
      } catch (error) {
        console.error('Failed to parse saved routines:', error);
      }
    }
  }, []);

  // Save routines to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(routines));
  }, [routines]);

  const addRoutine = (routine) => {
    const newRoutine = {
      ...routine,
      id: Date.now().toString(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setRoutines((prev) => [...prev, newRoutine]);
  };

  const updateRoutine = (updatedRoutine) => {
    setRoutines((prev) =>
      prev.map((routine) =>
        routine.id === updatedRoutine.id ? updatedRoutine : routine
      )
    );
  };

  const deleteRoutine = (id) => {
    setRoutines((prev) => prev.filter((routine) => routine.id !== id));
  };

  const markComplete = (id) => {
    setRoutines((prev) =>
      prev.map((routine) =>
        routine.id === id
          ? { ...routine, completed: !routine.completed }
          : routine
      )
    );
  };

  return {
    routines,
    addRoutine,
    updateRoutine,
    deleteRoutine,
    markComplete,
  };
}