var user = require('../user.js');

module.exports = {
    getName: function(req, res, next) {
        res.status(200).json(user.name);
    },
    getLocation: function(req, res, next) {
        res.status(200).json(user.location);
    },
    getOccupations: function(req, res, next) {
        // if (req.query.order === desc) {
        //     return occupations.sort();
        // } else if 
        //     (req.query.order === asc) {
        //         return occupations.reverse();
        //     }
        res.status(200).json(user.occupations);
    },
    getLatestOccupations: function(req, res, next) {
        res.status(200).json(user.occupations[user.occupations.length -1]);
    },
    getHobbies: function(req, res, next) {
        res.status(200).json(user.hobbies);
    },
    getHobbiesType: function(req, res, next) {
        var hobby = user.hobbies.filter(
            function(value) {
                return (value.type === req.params.type)
            }
        );
        res.status(200).json(hobby);
    },
    getFamily: function(req, res, next) {
        if (req.query.relation) {
            res.status(200).send(user.family.filter(
                function(value) {
                    return value.rating >= req.query.relation
                }))
        } else
        res.status(200).json(user.family);
    },
    getFamilyGender: function(req, res, next) {
        var gen = user.family.filter(
            function(value) {
                return (value.gender === req.params.gender)
            }
        );
        res.status(200).json(gen);
    },
    getRestaurants: function(req, res, next) {
        if (req.query.rating) {
            res.status(200).send(user.restaurants.filter(
                function(value) {
                    return value.rating >= req.query.rating
                }))
        } else
        res.status(200).json(user.restaurants);
    },
    getRestaurantsName: function(req, res, next) {
        var place = user.restaurants.filter(
            function(value) {
                return (value.name === req.params.name)
            }
        );
        res.status(200).json(place);
    },
    changeName: function(req, res, next) {
        var newName = req.params.name;
        newName.forEach(function(names) {
            name.push(names);
        })
        return res.status(200).send(name);
    }
}