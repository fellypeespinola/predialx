import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { database } from './infrastructure/database/db'
import publicRoutes from './interfaces/routes/publicRoutes'
import privateRoutes from './interfaces/routes/privateRoutes'
import http from 'http';
import socketio from 'socket.io'
import './model/index'

dotenv.config()

const app = express()
app.use(express.json({ limit: '15mb' }))
app.use(express.urlencoded({ limit: '15mb', extended: true }))
app.use(cors())
app.use(helmet())
app.use(publicRoutes)
app.use(privateRoutes)

const server = new http.Server(app);
const io = new socketio.Server(server);

let connectedUsers = {};

io.on('connection', socket => {
    const { user_id, location } = socket.handshake.query;

    connectedUsers = {...connectedUsers, user_id: {
        socketid: socket.id,
        location: location
    }}
});

app.use((req, res, next) => {
    res.locals.io = io;
    res.locals.connectedUsers = connectedUsers;

    return next();
})


const connectDb = async () => {
    try {
        await database.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

connectDb()

server.listen(3001, () => {
    console.log('API iníciada na porta ' + 3001)
})