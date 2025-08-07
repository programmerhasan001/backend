import express from "express";

const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// An array of random adjectives in English
const randomAdjectives = ["Happy", "Sad", "Funny", "Crazy"];

// An array of random names in English
const randomNames = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ivan",
  "Julia",
];

// A function to generate a random name from the array
const generateRandomName = () => {
  return randomNames[Math.floor(Math.random() * randomNames.length)];
};

// A function to generate a random adjective from the array
const generateRandomAdjective = () => {
  return randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
};

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomName = generateRandomName();
  const randomAdjective = generateRandomAdjective();
  res.render("index.ejs", { randomName, randomAdjective });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
