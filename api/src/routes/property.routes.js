const { GetListingByUser, DeleteListing, UploadImage, CreateListing, SearchResultListing, GetHomePageListing, UpdateListing, GetStoreListing, SearchListingByLocation } = require('../controllers/propertyController');
const upload = require('../utils/multer');

const router = require('express').Router();

// router.get('/get-user-listing/:id', GetListingByUser);
// router.post('/upload-image', upload.single("image"), UploadImage )
router.delete('/delete-listing/:id', DeleteListing);
router.patch('update-listing/:id', UpdateListing)
router.post('/create-listing', upload.single("image"), CreateListing);
router.get('/search', SearchResultListing);
router.get('/search-location', SearchListingByLocation);
router.get('/homepage-listing', GetHomePageListing);
router.get('/store-listing', GetStoreListing);
 
module.exports = router;