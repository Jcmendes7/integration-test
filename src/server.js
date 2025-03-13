const express = require("express");
const app = express();
const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Test integration");
});

app.listen(PORT, () => console.log(`Sever is running on Port ${PORT}`));
