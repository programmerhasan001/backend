import express from "express"
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const port = 3002

let isAuthorized = false

app.use(bodyParser.urlencoded({extended: true}))



app.use(function passwordCheck(req, res, next) {
    const userPass = req.body?.password

    if(userPass === "ILoveProgramming") {
        console.log("auth success")
        isAuthorized = true;
    }

    next()
})

app.get("/", (req, res) => {
    isAuthorized = false
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/check", (req, res) => {
    if(isAuthorized) {
        res.sendFile(__dirname + "/public/secret.html")
    } else {
        res.sendFile(__dirname + "/public/index.html")
    }
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})