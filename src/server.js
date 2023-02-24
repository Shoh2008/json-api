const express = require("express")
const cors = require("cors")
require("./config")
const app = express()
const path = require("path")

const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})
// routers
app.use("/users", require("./routers/users"))
app.use("/tasks", require("./routers/tasks"))
app.use("/chat", require("./routers/chat"))

app.listen(PORT, () => console.log("server is ready at http://localhost:" + PORT))