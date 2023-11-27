const { GetListingByUser } = require('../controllers/propertyController');

const router = require('express').Router();

router.get('/get-user-listing/:id', GetListingByUser)

module.exports = router;