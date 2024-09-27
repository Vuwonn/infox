import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
}));

app.use(express.json({
    limit: '20kb',
    extended: true,
    parameterLimit: 50000
}));

app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(express.static('public'));


app.use(cookieParser('keyboard'));


import router from './routes/user.route.js';
app.use('/api/v1/clientBasicRegistration', router);

export { app };
