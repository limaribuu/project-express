const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to Book API with Express JS!");
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
