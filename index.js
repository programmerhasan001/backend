import express from "express"

const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render(`index.ejs`)
})

app.post("/submit", (req, res) => {
    const {fName, lName} = req.body;
    const numLength = (fName + lName).length;
    res.render('index.ejs', {numLength})
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})