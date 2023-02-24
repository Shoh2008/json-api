const controller = require("../controllers/tasks")
const router = require("express").Router()

router.get("/", controller.GET)
router.get("/:id", controller.GETONE)
router.post("/", controller.POST)
router.post('/answer/:id', controller.POST_ANSWER)
router.put("/:id", controller.PUT)
router.delete("/:id", controller.DELETE)

module.exports = router