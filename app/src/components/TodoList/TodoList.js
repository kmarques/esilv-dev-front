/**
 * [
 *  {
 *      id: 1,
 *     title: "todo 1",
 *    completed: false
 *  },
 *  {
 *      id: 2,
 *     title: "todo 2",
 *   completed: false
 *  }
 * ]
 */

function TodoList({ data, setData, disableAdd }) {
  function handleAddItem() {
    const id = Date.now();
    setData([
      ...data,
      {
        id: id,
        title: "todo " + id,
        completed: false,
      },
    ]);
  }

  function handleDeleteItem(item) {
    setData(data.filter((value) => value.id !== item.id));
  }

  function handleToggleComplete(item) {
    setData(
      data.map((value) => {
        if (value.id === item.id) {
          return {
            ...value,
            completed: !value.completed,
          };
        } else {
          return value;
        }
      })
    );
  }

  return (
    <>
      {!disableAdd && <button onClick={handleAddItem}>Add Item</button>}
      <ul>
        {data.map((item) => (
          <li
            key={item.id}
            style={{ opacity: item.completed ? 0.5 : 1 }}
            onClick={() => handleToggleComplete(item)}
          >
            <input name={item.id} type="checkbox" checked={item.completed} />
            {item.title}
            <button onClick={() => handleDeleteItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
