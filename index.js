import express from "express"
const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.status(200).json({message: "success"});
})

app.get("/user", (req, res) => {
    res.sendStatus(200);
})

app.post("/user", (req, res) => {
    res.sendStatus(201);
})

app.put("/user", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})