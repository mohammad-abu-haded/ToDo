# React To-Do App

A modular and interactive **To-Do application** built with **React** and **TypeScript**, demonstrating modern front-end development practices, component-based architecture, and state management using hooks.

## Features

- **Add, remove, and toggle tasks** with a clean and responsive UI.  
- **Persistent state**: Tasks are saved in **Local Storage** using a custom hook (`useLocalStorage`), so data remains across browser sessions.  
- **State management with `useReducer`**: Handles multiple actions like initializing tasks, adding, removing, and toggling completion status.  
- **Reusable components**: Includes `Form`, `ToDoItem`, `AllTodos`, and `ToDoData` components.  
- **TypeScript integration**: Fully typed components and state for better code safety and scalability.  
- **Dynamic styling**: Completed tasks visually distinguished and interactive checkboxes.

## Project Structure

```
src/
├── components/
│   ├── form-component/
│   ├── AllTodos/
│   ├── ToDo-Data/
│   └── ToDoItem/
├── hooks/
│   └── local_storage.hook.ts
├── state/
│   └── reducer.ts
├── types.ts
└── App.tsx
```

- **components/**: Contains all reusable UI components.
- **hooks/**: Custom hook for syncing state with Local Storage.
- **state/**: Reducer function managing the app's state logic.
- **types.ts**: TypeScript interfaces for ToDo objects.
- **App.tsx**: Main component that integrates all parts and manages the overall state.

## How It Works

1. On initial load, `useLocalStorage` fetches stored tasks from Local Storage and dispatches them to the reducer.  
2. Users can add tasks through the **Form component**.  
3. Tasks are displayed in **AllTodos**, where each **ToDoItem** can be toggled as completed or removed.  
4. **ToDoData** shows counts for created and completed tasks in real-time.  
5. Every state update is persisted back to Local Storage automatically.

## Technologies Used

- **React**  
- **TypeScript**  
- **Vite** (for project setup)  
- **CSS Modules / custom styling**  
- **React Hooks** (`useReducer`, `useEffect`, custom hooks)  

## How to Run

1. Clone the repository:  
   ```bash
   git clone https://github.com/mohammad-abu-haded/ToDo.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Future Improvements

- Add editing tasks feature.
- Integrate React Router for multiple pages.
- Implement dark mode and additional UI themes.
- Explore React Native version for mobile apps.

---

**Built with ❤️ using React and TypeScript**
