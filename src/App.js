import React from "react";
import JoinBlock from "./components/JoinBlock";
import socket from "./socket"; //при это сокеты подключены в отдельном файле



function App() {
  return (
  <div className="wrapper">
    <JoinBlock />    
  </div>
  );
}

export default App;
