import React, { useState } from "react";
import "./App.css";
import MySelect from "./components/MySelect/MySelect";

function App() {
  const [groups, setGroups] = useState(["1", "2"]);

  const styles = {
    width: "300px",
    margin: 'auto'
  };

  return (
    <div style={styles} className="App">
      <MySelect {...{ groups, setGroups }} />
    </div>
  );
}

export default App;
