const express = require("express");
const app = express();

app.post("", (req, res) => {
    res.json("recebido!")

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
  });