const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require("./config/movies.config");

app.listen(8000, () => {
    console.log(`App is listenig on port ${port}`)
});