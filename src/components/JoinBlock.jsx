import React from 'react';
import socket from "../socket"; //при это сокеты подключены в отдельном файле

function JoinBlock() {
    const[roomId, setRoomId] = React.useState('');
    const[userName, setUserName] = React.useState('');

    const onEnter = () => {
        console.log(roomId, userName);
    }


    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)}></input>
            <input type="text" placeholder="Введите имя" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <button onClick={onEnter} className="btn btn-success">Войти в чат</button>
        </div>
    )
}

export default JoinBlock;
