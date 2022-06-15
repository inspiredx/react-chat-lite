const express = require('express');                      //Подключаем фреймворк

const app = express();                                   //Создаем и помещаем в app приложение express
const server = require('http').Server(app);              //переводим всю логику сервера в приложение экспресс
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });;                                                   //Помещает в сервер возможность работы с сокетами(сервер знает о сокетах)/Подключаем сокет ио

app.use(express.json())                                  //Подключаем посредника к приложению экспресс/тепер может отправлять запросы JSON

  const rooms = new Map();                               //Основной(псевдо) массив, содержащий массивы ключ-значение/ Подобие базы данных
    


app.get('/rooms', (req, res) => {                        //Если переходим по localhost 9999/users, выполняется ф-ция/ Получает request и response
    res.json(rooms);                                     //Отправляем ответ
});

app.post('/rooms', (req, res) => {                       //Выполняется при запросе POST
    const {roomId, userName} = req.body;
    if(!rooms.has()) {                                   //Если существует комната
      rooms.set(roomId, new Map([                        //roomId - свойство
        ['users', new Map()],                            // в коллекции есть свойство users, потребуются манипуляции(удалить, создать)
        ['messages', []],                                //мэп не нужен, сообщения просто хранятся в массиве
      ]))                                                //Если комнаты нет, создаем(значение-свойство)
    }  
    res.send(); 
})

io.on('connection', socket => {                         //Функция выполняется при подкл к сокету
    console.log('user connected', socket.id);
})

server.listen(9999, (err) => {
    if(err) {
        throw Error(err);
    }
    console.log('Server up')
});                                                     //Включение слежки за портом, приложение запускается по этому порту + выдает сообщение о запуске сервера