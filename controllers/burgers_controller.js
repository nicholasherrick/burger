const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

// Create the router for export
router.get("/", function(req, res) {});
router.post("/api/burgers", function(req, res) {});
router.put("/api/burgers/:id", function(req, res) {});

module.exports = router;