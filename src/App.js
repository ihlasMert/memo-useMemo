import React, { useCallback, useMemo, useState } from "react";
import "./App.css";

import Button from "./components/Button/Button";
import List from "./components/Demo/List";

function App() {
  const [list, setList] = useState("MY LİST");

  //useClaback
  const changeTitleHandler = useCallback(()=>{
setList("NEW TİTLE")
  }, [])

  const ListItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <List title={list} items={ListItems}/>
      <Button onClick={changeTitleHandler}>CHANGE LİST HANDLER</Button>
    </div>
  );
}

export default App;
