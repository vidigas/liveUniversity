import express from 'express';
import path from 'path';

import { getAllCourses, getCourseDetails } from './Controllers';

const app = express();

const PORT = 8081;

app.use(express.static(__dirname + '/Public'));

app.set('Views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/hello', (req, res) => res.status(200).send('Hello World'));

app.get('/', getAllCourses);

app.get('/curso', getCourseDetails);

app.listen(PORT, err => {
    console.log(`app running on port ${PORT}`)
});