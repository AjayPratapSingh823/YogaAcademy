const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './middleware/blog/', // Specify the destination directory for uploaded files
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 1024, // Max file size (in bytes), adjust as per your requirement
        fieldSize: 1024 * 1024 *10, // Max field size (in bytes), adjust as per your requirement
        fields: 20 // Max number of non-file fields, adjust as per your requirement
    },
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).fields([
    { name: 'coverImage', maxCount: 1 }, // Define the fields and max count of files for each
    { name: 'images', maxCount: 10 }
]);

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}

module.exports = upload;
