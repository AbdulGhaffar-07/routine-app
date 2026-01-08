# Daily Routine App

A modern, user-friendly React application for organizing and tracking your daily routines. Stay productive and maintain consistency with your daily activities.

## Features

✨ **Key Features:**
- ✅ Create, read, update, and delete routines
- 🎯 Categorize routines (work, health, personal, learning, exercise, other)
- ⏰ Set specific times for each routine
- ☑️ Mark routines as complete/incomplete
- 💾 Persistent storage using localStorage
- 📱 Fully responsive design
- 🎨 Modern and intuitive UI
- ⚡ Fast and smooth interactions

## Tech Stack

- **React** - UI library
- **CSS3** - Styling with CSS variables
- **localStorage** - Data persistence
- **Vite** - Build tool (optional)

## Project Structure

```
routine-app/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── RoutineList.jsx    # Routine list component
│   │   ├── RoutineForm.jsx    # Form component for creating/editing
│   │   └── RoutineItem.jsx    # Individual routine item component
│   ├── hooks/
│   │   └── useRoutines.js     # Custom hook for routine management
│   ├── App.jsx                # Main app component
│   ├── App.css                # App styling
│   └── index.jsx              # React entry point
├── .gitignore                 # Git ignore rules
└── README.md                  # Project documentation
```

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulGhaffar-07/routine-app.git
   cd routine-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

### Creating a Routine
1. Click the **"+ Add New Routine"** button
2. Fill in the routine details:
   - **Title**: Name of your routine (required)
   - **Description**: Optional details about the routine
   - **Time**: When you want to do this routine (required)
   - **Category**: Choose from predefined categories
3. Click **"Create Routine"** to save

### Editing a Routine
1. Click the **"Edit"** button on any routine
2. Modify the details as needed
3. Click **"Update Routine"** to save changes

### Marking as Complete
- Click the **"Done"** button to mark a routine as complete
- Click **"Undo"** to mark it as incomplete
- Completed routines appear with strikethrough text and a green background

### Deleting a Routine
- Click the **"Delete"** button to remove a routine permanently

## Data Persistence

All your routines are automatically saved to your browser's localStorage. This means:
- Your routines persist even after closing the browser
- No account or backend required
- Data is stored locally on your device

## Customization

### Adding New Categories
Edit the `categories` array in `src/components/RoutineForm.jsx`:

```javascript
const categories = ['work', 'health', 'personal', 'learning', 'exercise', 'other', 'yourCategory'];
```

### Changing Colors
Modify the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  /* ... other colors ... */
}
```

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest versions
- Safari: Latest versions
- Mobile browsers: Full support

## Performance

The app is optimized for:
- Fast initial load
- Smooth interactions
- Minimal memory footprint
- Efficient re-renders

## Future Enhancements

- 📅 Weekly/monthly routine views
- 📊 Progress tracking and statistics
- 🔔 Browser notifications for routine reminders
- 🌙 Dark mode support
- 📤 Export/import routines
- 👥 Cloud sync with user accounts
- 📱 Mobile app (React Native)

## Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

**Abdul Ghaffar** - [GitHub Profile](https://github.com/AbdulGhaffar-07)

## Support

If you encounter any issues or have suggestions:
1. Open an issue on GitHub
2. Provide detailed description of the problem
3. Include steps to reproduce if applicable

## Changelog

### Version 1.0.0 (2026-01-08)
- Initial release
- Core functionality: CRUD operations for routines
- localStorage persistence
- Responsive design
- Dark-friendly UI

---

**Happy Planning! 📅✨**