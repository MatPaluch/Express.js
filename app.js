const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <label for="email">Email</label>
      <input type="text" name="email" id="email" />
      <label for="password">Hasło</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Zaloguj</button>
    </form>
    <a href="/download">Download  plik</a>`);
});

app.listen(3000, () => {
  console.log("App is running on port 3000!");
});
app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.send(`<h1>${email}</h1>`);
});
app.get("/download", (req, res) => {
  res.download("./text.txt");
});
