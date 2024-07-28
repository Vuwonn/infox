import express from 'express'
import cors from 'cors'
const app = express()

app.use(cors(
    {
        origin: 'http://example.com',
        credentials: true

    }
))

//this is for haldling data comming form form
app.use (express.json({
    limit: '20kb',
    extended: true,
    parameterLimit: 50000
}))

// this is for haldling data comming from url

app.use(express.urlencoded({ extended: true, limit: '10kb' }))


// this is for stroing static files
app.use(express.static("public"))



// this is for performing crud operation in users cookie
app.use(cookieparser({

    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))






