import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

const App: FC = () => {
  return (
    <div className="App">
      <TodoWrapper />
    </div>
  );
};

export default App;
