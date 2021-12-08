const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.resolve("src", "views"));

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(port, () => console.log(`The server is runing on port:${port}`));

