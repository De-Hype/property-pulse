const { GetListingByUser, DeleteListing, UploadImage, CreateListing, SearchResultListing, GetHomePageListing, UpdateListing } = require('../controllers/propertyController');
const upload = require('../utils/multer');

const router = require('express').Router();

router.get('/get-user-listing/:id', GetListingByUser);
router.post('/upload-image', upload.single("image"), UploadImage )
router.delete('/delete-listing/:id', DeleteListing);
router.patch('update-listing/:id', UpdateListing)
router.post('/create-listing', CreateListing);
router.get('/search', SearchResultListing);
router.get('homepage-listing', GetHomePageListing);

module.exports = router;