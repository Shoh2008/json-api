const { id } = require("../utils/id")
const fs = require("fs")

const GET = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            res.json(JSON.parse(file))
        })
    } catch (e) { res.json(e) }
}

const GETONE = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            let item = JSON.parse(file).find(e => e.id === req.params.id)
            res.json(item)
        })
    } catch (e) { res.json(e) }
}

const POST = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            let data = JSON.parse(file)
            let item = { id: id(), answers: [], ...req.body }
            data.push(item)
            fs.writeFileSync("./src/database/tasks.json", JSON.stringify(data));
            res.json(item)
        })
    } catch (e) { res.json(e) }
}

const POST_ANSWER = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            let data = JSON.parse(file)
            const item = data.find(e => e.id === req.params.id)
            item.answers.push({ id: id(), ...req.body })
            fs.writeFileSync("./src/database/tasks.json", JSON.stringify(data));
            res.json(item)
        })

        
    } catch (e) { res.status(500).json(e) }
}

const PUT = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            let data = JSON.parse(file)
            let item = data.find(e => e.id === req.params.id)
            const index = data.indexOf(item)
            data.splice(index, 1, req.body)
            fs.writeFileSync("./src/database/tasks.json", JSON.stringify(data));
            res.json(req.body)
        })
    } catch (e) { res.json(e) }
}

const DELETE = (req, res) => {
    try {
        fs.readFile("./src/database/tasks.json", "utf8", function (err, file) {
            let data = JSON.parse(file)
            let item = data.find(e => e.id === req.params.id)
            const index = data.indexOf(item)
            data.splice(index, 1)
            fs.writeFileSync("./src/database/tasks.json", JSON.stringify(data));
            res.json(req.body)
        })
    } catch (e) { res.json(e) }
}

module.exports = { GET, GETONE, POST, POST_ANSWER, PUT, DELETE }