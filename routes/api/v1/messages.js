const express = require("express");
const router = express.Router();
const controllerMessage = require("../../../controllers/api/v1/messages");

router.post('/', controllerMessage.store);

router.get("/:id", controllerMessage.getOne);

router.get("/", controllerMessage.getAll);



router.put("/:id", controllerMessage.update);

router.delete("/:id", controllerMessage.deleteOne);





module.exports = router;