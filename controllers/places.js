const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cousines: 'Thai, Pan-Asian',
        pic: '/images/img-3.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/img-4.jpg'
    }]
    res.render('places/index', {places})
})

module.exports = router