import React from 'react';
import axios from 'axios';

function JoinBlock({onLogin}) {
    const[roomId, setRoomId] = React.useState('');
    const[userName, setUserName] = React.useState(true);
    const[isLoading, setLoading] = React.useState(true);

    const onEnter = async () => {
        if(!roomId || !userName) {
            return alert('Заполните поля ввода');
        }
        const obj = {
            roomId,
            userName,
        };
        setLoading(true);
        await axios.post('./rooms', obj)
        onLogin(obj);
    };


    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={(e) => setRoomId(e.target.value)}></input>
            <input type="text" placeholder="Введите имя" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
            <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
                {isLoading ? 'Вход...' : 'Войти' }
            </button>
        </div>
    )
}

export default JoinBlock;
