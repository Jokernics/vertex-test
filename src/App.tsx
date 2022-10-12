import React, { useState } from "react";
import "./App.css";
import MySelect from "./components/MySelect/MySelect";

function App() {
  const [groups, setGroups] = useState([]);

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
