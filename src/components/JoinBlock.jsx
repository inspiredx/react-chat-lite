import React from 'react';
import socket from "../socket"; //при это сокеты подключены в отдельном файле

function JoinBlock() {
    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID"></input>
            <input type="text" placeholder="Введите имя"></input>
            <button className="btn btn-success">Войти в чат</button>
        </div>
    )
}

export default JoinBlock;
