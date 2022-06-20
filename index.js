const app = require("./routes/user");
const dbConnection = require("./dbConn/mongoDB");
require("dotenv").config();

const port = process.env.PORT;

app.listen(port, async () => {
  await dbConnection();
  console.log(`server is running on port ${port}`);
});
