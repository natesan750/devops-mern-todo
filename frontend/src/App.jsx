// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = `${import.meta.env.VITE_API_URL}/tasks`;

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [text, setText] = useState("");

//   const fetchTasks = async () => {
//     const res = await axios.get(API);
//     const { tasks } = res.data;
//      setTasks(tasks || []); // Fallback to empty array
//     setTasks(tasks);
//   };

//   const addTask = async () => {
//     if (!text) return;
//     await axios.post(API, { text });
//     setText("");
//     fetchTasks();
//   };

//   const deleteTask = async (id) => {
//     await axios.delete(`${API}/${id}`);
//     fetchTasks();
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>To-Do List with Devops DB Test</h1>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="New task"
//       />
//       <button onClick={addTask}>Add</button>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task._id}>
//             {task.text}
//             <button onClick={() => deleteTask(task._id)}>❌</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/tasks`;

function App() {
  const [tasks, setTasks] = useState([]); // ⬅️ Initialize as empty array
  const [text, setText] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      const { tasks } = res.data;
      setTasks(tasks || []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  const addTask = async () => {
    if (! text) return;
    try {
      await axios.post(API, { text });
      setText("");
      fetchTasks();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>To-Do List with Devops DB Test</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target. value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.text}
            <button onClick={() => deleteTask(task._id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
