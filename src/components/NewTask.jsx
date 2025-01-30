import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [entered, setEntered] = useState("");

  function handleChange(event) {
    setEntered(event.target.value);
  }

  function handleClick() {
    if (entered.trim() === "") {
      return;
    }
    onAdd(entered);
    setEntered("");
  }
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={entered}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-900"
      >
        Add Task
      </button>
    </div>
  );
}
