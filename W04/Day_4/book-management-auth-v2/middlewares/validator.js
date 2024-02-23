const { body, validationResult } = require('express-validator') 

exports.validateBookEntries = [
    // title
    body('title')
    .notEmpty()
    .withMessage('Title is required.'),
    // author
    body('author')
    .notEmpty()
    .withMessage('Author is required.'),
    // publication_year
    body('publication_year')
    .notEmpty()
    .withMessage('Publication Year is required.')
    .isDecimal({
        decimal_digits: '4,'
    }),
    // description
    body('description')
    .notEmpty()
    .withMessage('Description is required.'),
    // genre
    body('genre')
    .notEmpty()
    .withMessage('Genre is required'),
    (req,res,next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }
]

exports.validateUserEntries = [
     // username
    body('username')
    .notEmpty()
    .isAlphanumeric({ ignore : '-_.'})
    .isLength({ min: 3, max:10 }),
    // email
    body('email')
    .isEmail()
    .withMessage('Title is required.'),
    (req,res,next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }   
]