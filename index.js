import express from "express"
import path, { dirname } from "path"
import { fileURLToPath } from "url"

const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    console.log(__filename);
    res.sendFile("index.html", {root: path.join(__dirname)}, function(error){
        if(error) {
            console.log(error)
        } else {
            console.log("File sent is success")
        }
    })
})

app.post("/submit", (req, res) => {
    const name = req.body.street + req.body.pet;
    res.status(200).send(`
        <h2>Your Band Name is:</h2>
        <p>${name}✌️</p>
    `)
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})