import express from "express"

const app = express()
const port = 3002

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    let today = new Date()
    let day = today.getDay()

    let dayType = "a weekday";
    let advice = "it's time to work hard";

    if(day === 0 || day === 6) {
        dayType = "the weekend";
        advice = "it's time to have fun!";
    }
    
    res.render(`index.ejs`, {dayType, advice})
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})