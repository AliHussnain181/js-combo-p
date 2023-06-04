import React, { useState, useEffect } from "react";

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  // Load habits from local storage on component mount
  useEffect(() => {
    const storedHabits = localStorage.getItem("habits");
    if (storedHabits) {
      setHabits(JSON.parse(storedHabits));
    }
  }, []);

  // Save habits to local storage whenever the habits state changes
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      const updatedHabits = [...habits, { name: newHabit, frequency: 0 }];
      setHabits(updatedHabits);
      setNewHabit("");
    }
  };

  const deleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-4xl font-bold mb-4 overflow-hidden">Habit Tracker</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          className="border border-gray-300 rounded py-2 px-4 mr-2"
        />
        <button
          onClick={addHabit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded "
        >
          Add Habit
        </button>
      </div>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className="mb-2">
            <span className="mr-2">
              {habit.name} ({habit.frequency} times)
            </span>
            <button
              onClick={() => deleteHabit(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
