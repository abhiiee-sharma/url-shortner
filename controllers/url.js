const { nanoid } = require('nanoid');
const URL = require('../models/url');

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({errro : "URL is required"})
    const shortId = nanoid(8);

    await URL.create({
        shortId : shortId,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.json({id : shortId })
}

async function handleRedirectToOriginal(req, res) {
    const shortId = req.params.shortId;
        const originalSite =    await URL.findOneAndUpdate({
            shortId
        },
        {
            $push : {
                visitHistory: {
                    timestamp : Date.now(),
                }
            }
        })
    res.redirect(originalSite.redirectUrl);
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClick : result.visitHistory.length,
        analtyics: result.visitHistory
    });
}

module.exports = { 
    handleGenerateShortUrl,
    handleRedirectToOriginal, 
    handleGetAnalytics,
}