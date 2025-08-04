import express from "express"

const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    let bowl = ["Apples", "Oranges", "Pears"]
    let htmlContent = "<h2>HTML Content</h2>"
    let numbers = [1, 2, 3, 4];
    res.render(`index.ejs`, {fruits: bowl, htmlContent, numbers})
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})