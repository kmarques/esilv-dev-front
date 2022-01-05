import { useState } from "react";

function Collapse() {
  let [opened, setOpened] = useState(false);

  function toggle() {
    setOpened(!opened);
  }
  return (
    <div>
      <h3 onClick={toggle}>Title</h3>
      <p style={{ display: !opened ? "none" : "block" }}>Content</p>
    </div>
  );
}

export default Collapse;
