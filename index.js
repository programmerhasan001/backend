import express from "express"
import morgan from "morgan"

const app = express()
const port = 3002;

const logger = (req, res, next) => {
    console.log("Method =", req.method, " URL =", req.url);
    next();
}

app.use(morgan('short'))
app.use(logger)

app.get('/', (req, res) => {
    // console.log("get morgan ot")
    res.status(200).json({message: "hello"})
})

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})

