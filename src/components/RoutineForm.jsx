import React, { useState, useEffect } from 'react';

function RoutineForm({ onSubmit, onCancel, initialRoutine }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: '',
    category: 'work',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialRoutine) {
      setFormData(initialRoutine);
    }
  }, [initialRoutine]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const categories = ['work', 'health', 'personal', 'learning', 'exercise', 'other'];

  return (
    <form className="routine-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>{initialRoutine ? 'Edit Routine' : 'Create New Routine'}</h2>
        <p>Fill in the details below</p>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="e.g., Morning Exercise"
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add details about this routine (optional)"
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">Time *</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={errors.time ? 'input-error' : ''}
        />
        {errors.time && <span className="error-message">{errors.time}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {initialRoutine ? 'Update Routine' : 'Create Routine'}
        </button>
      </div>
    </form>
  );
}

export default RoutineForm;