const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  return res.json({
    name: "DevOps Action!",
    tools: {
      Express: true,
      NodeJs: true,
      CircleCI: true,
      Heroku: true,
      Tested: true,
    },
    author: "Kevin Almeida",
  });
});

app.listen(PORT, () => {
  console.log(`running in ${PORT}`);
});
