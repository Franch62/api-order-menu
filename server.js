const app = require("./app");


const database = require('./src/config/database')
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running at port ${port}`);
});
