const getAllCourses = (req, res) => {
    res.render('courses');
};

const getCourseDetails = (req, res) => {
    res.render('details');
};

export { getAllCourses, getCourseDetails };