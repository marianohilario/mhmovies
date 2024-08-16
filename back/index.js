const app = require("./src/server.js");
require('dotenv').config()
const dbCon = require("./src/config/dbCon.js");
PORT = process.env.PORT || 3000

dbCon()
  .then((res) => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.log("Error connecting to database");
  });
