var users = require('../mock_data/users');
var events = require('../mock_data/events');

const getAllCourses = (req, res) => {
    res.render('users', { users });
};

const getCourseDetails = (req, res) => {
    res.render('events', { events });
};

export { getAllCourses, getCourseDetails };