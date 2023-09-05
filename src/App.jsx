import React, { useState } from 'react';
import "./App.css";
import { MyData } from "./data/data";
import Box from "./components/box";

function App() {
  const [Data, setData] =useState(MyData)
  const [SelectedData, setSelectedData] =useState([])
  return (
    <div className="flex flex-row p-8">
      <Box title="All Data" btn="Add" data={Data} />
      <Box title="Selected Data" btn="Delete" data={Data} />     
    </div>
  );
}

export default App;
