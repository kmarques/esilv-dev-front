import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserItem from "./UserItem";

function UserList() {
  const [users, setUsers] = useState();
  const [displayUsers, setDisplayUsers] = useState(users);
  const [filters, setFilters] = useState();

  function handleDeleteItem(user) {
    fetch("http://localhost:3001/users/" + user.id, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 404) {
        alert("User not found");
      } else {
        alert("User " + user.id + " deleted");
        setUsers(users.filter((value) => value.id !== user.id));
      }
    });
  }

  function handleAddUser(name) {
    fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]);
      });
  }

  function handleEditUser(value) {
    fetch("http://localhost:3001/users/" + value.id, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(
          users.map((user) => {
            if (user.id === data.id) {
              return data;
            }
            return user;
          })
        );
      });
  }

  //useEffect(() => {
  //    //AfterUpdate
  //    return () => {
  //        //BeforeUpdate after first print
  //    }
  //}, [users])

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (users)
      setDisplayUsers(
        users.filter((user) => !filters || user.name.startsWith(filters))
      );
  }, [filters, users]);

  // Ou en 1 useEffect
  //useEffect(() => {
  //  if (users)
  //    setDisplayUsers(
  //      users.filter((user) => !filters || user.name.startsWith(filters))
  //    );
  //  else
  //    fetch("http://localhost:3001/users")
  //      .then((response) => response.json())
  //      .then((data) => setUsers(data));
  //}, [filters, users]);

  return (
    <>
      {users === undefined && <span>Loading...</span>}
      {displayUsers?.length === 0 && <span>No data</span>}
      {displayUsers && (
        <>
          <UserForm onSubmit={handleAddUser} />
          <input onChange={(event) => setFilters(event.target.value)} />
          <ul>
            {displayUsers.map((user) => (
              <UserItem
                user={user}
                onDelete={handleDeleteItem}
                onEdit={handleEditUser}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default UserList;
