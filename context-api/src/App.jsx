import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import Button from "./components/sharder/Button";

function App() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");

  const handleDataStore = (obj) => {
    setData([...data, obj]);
  };
  console.log(data);
  const handleChange = (e) => {
    const trimed = e.target.value.trim();
    setName(trimed);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("name is required");
    } else {
      e.target.reset();
      const obj = {
        id: uuidv4(),
        name: name,
      };
      handleDataStore(obj);
      alert("form submitted");
      alert(`welcome ${name}`);
      setName("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleChange}
        />
        <Button type="submit" isDisabled={false} btnClass="primary">
          send
        </Button>
      </form>

      <div>
        {data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
