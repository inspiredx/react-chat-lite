import React from "react";
import socket from "./socket";
import reducer from "./reducer";
import JoinBlock from "./components/JoinBlock";



function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
  });

  const onLogin = (obj) => {      //Выполняется при входе в чат
    dispatch({
      type: 'JOINED',
      payload: obj,
    });
    socket.emit('ROOM:JOIN', obj);              //Отправляется сокет запрос на бэкэнд
  }

  console.log(state);

  return (
  <div className="wrapper">
    {!state.isAuth && <JoinBlock onLogin={onLogin} />}    
  </div>
  );
}

export default App;
