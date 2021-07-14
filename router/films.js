const express = require("express");
const router = express.Router();
const { film: controller } = require('../contollers')
const { list, get, create, update, destroy } = controller

router.get('/', list)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router