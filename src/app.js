import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: 'http://example.com',
    credentials: true
}));

// Handling data coming from forms
app.use(express.json({
    limit: '20kb',
    extended: true,
    parameterLimit: 50000
}));

// Handling data coming from URL
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Serving static files
app.use(express.static('public'));

// Cookie parser middleware
app.use(cookieParser('keyboard cat'));

// Import and use router
import router from './routes/user.route.js';
app.use('/user', router);

export { app };
