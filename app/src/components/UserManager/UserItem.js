import { useState } from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";

function UserItem({ user, onDelete, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  function handleEditMode(e) {
    if (e.target.nodeName === "LI") {
      setEditMode(!editMode);
    }
  }
  return (
    <li onClick={handleEditMode}>
      {!editMode ? (
        <>
          {user.name}
          <button onClick={() => onDelete(user)}>X</button>
          <Link to={"/users/" + user.id}>See user</Link>
        </>
      ) : (
        <UserForm
          defaultValues={user}
          submitLabel="Edit"
          onSubmit={(name) => {
            onEdit({
              ...user,
              name: name,
            });
            setEditMode(false);
          }}
        />
      )}
    </li>
  );
}

export default UserItem;
