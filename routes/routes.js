// -------------------------IMPORTING-------------------------
//express
const express = require('express')
//Controller
const {user, role} = require('../controller/controller')

// -------------------------DEFINE ROUTER-------------------------
const router = express.Router()

// -------------------------CUSTOM ROUTE-------------------------
router.post('/user', user)

router.post('/role', role)


// -------------------------EXPORT ROUTER-------------------------
module.exports = router


