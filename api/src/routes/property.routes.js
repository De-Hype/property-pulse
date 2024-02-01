const { GetListingByUser, DeleteListing, UploadImage } = require('../controllers/propertyController');
const upload = require('../utils/multer');

const router = require('express').Router();

router.get('/get-user-listing/:id', GetListingByUser);
router.post('/upload-image', upload.single("image"), UploadImage )
router.delete('/delete-listing', DeleteListing);

module.exports = router;