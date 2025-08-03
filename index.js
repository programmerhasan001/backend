import express from "express"
const app = express();
const port = 3002;

app.get("/", (req, res) => {
    res.status(200).json({message: "success"});
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})