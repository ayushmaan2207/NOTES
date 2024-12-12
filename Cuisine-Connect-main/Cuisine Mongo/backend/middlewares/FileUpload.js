const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up where to store the uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname,'..', 'public', 'Images');  
        
        // Check if directory exists, create if it doesn't
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);  // This sets the destination folder
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = path.extname(file.originalname);
        const newFilename = file.fieldname + '-' + uniqueSuffix + fileExtension;
        
        cb(null, newFilename);  // Set the filename
    }
});


const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Only allow certain file types (e.g., images)
        const fileTypes = /jpeg|jpg|png|gif/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);  
        } else {
            cb(new Error('Only image files are allowed.'));
        }
    }
}).single('image');  

module.exports = { singleUpload: upload };
