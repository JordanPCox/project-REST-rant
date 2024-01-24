const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    const placeId = req.params.id
    res.send(`Displaying details for place with ID $[placeId}`)
})

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