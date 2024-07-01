const express = require('express');
const router = express.Router();
const GetModel = require("../models/schema");

router.get('/travels', async (req, res) => {
    return res.status(200).json({ message: "55555" });
});

module.exports = router;