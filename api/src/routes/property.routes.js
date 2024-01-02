const { GetListingByUser, DeleteListing } = require('../controllers/propertyController');

const router = require('express').Router();

router.get('/get-user-listing/:id', GetListingByUser);
router.delete('/delete-listing', DeleteListing);

module.exports = router;