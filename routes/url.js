const express = require('express');
const router = express.Router();
const { handleGenerateShortUrl, handleRedirectToOriginal, handleGetAnalytics } = require('../controllers/url');

router.post("/", handleGenerateShortUrl);

router.get("/:shortId", handleRedirectToOriginal);

router.get("/analytics/:shortId", handleGetAnalytics )


module.exports  = router;