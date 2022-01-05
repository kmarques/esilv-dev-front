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

function TodoList({ data, setData }) {
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
    setData(data.filter((value) => value.id != item.id));
  }

  return (
    <>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDeleteItem(item)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
