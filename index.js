import express from "express"
const app = express()
const port = 3002

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/user">
      Name: <input type="text" name="user[name]" /><br />
      Age: <input type="text" name="user[age]" /><br />
      Skills: 
      <input type="text" name="user[skills][]" placeholder="Skill 1" />
      <input type="text" name="user[skills][]" placeholder="Skill 2" /><br />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/blog", (req, res) => {
    const data = req.body

    res.send(data);
})

app.post("/user", (req, res) => {
    const data = req.body
    console.log(data)
    res.status(201).json(data)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})