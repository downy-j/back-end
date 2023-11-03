"use strict";

const app = require("../app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT}번 서버 열림`);
});
