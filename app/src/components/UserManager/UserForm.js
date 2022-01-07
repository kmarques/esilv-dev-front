import { useState } from "react";

function UserForm({ onSubmit, defaultValues, submitLabel = "Add" }) {
  const [name, setName] = useState(defaultValues?.name ?? "");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={name} onChange={handleChange} />
      <input type="submit" value={submitLabel} />
    </form>
  );
}

export default UserForm;
