const express = require("express");
const app = express();
const PORT = 3333;

app.get("/", (request, response) => {
  response.send("Test integration");
});

// Exporte o app sem iniciar o servidor
module.exports = app;

// Inicie o servidor apenas se o arquivo for executado diretamente
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
}
