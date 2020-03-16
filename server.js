const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


const students = [{
        "name": "Benson Andrew Idahosa",
        "dob": "27 / 03 / 1999",
        "program": "Bsc Pentecostalism ",
        "level": "400",
        "image": "/images/idahosa.png"
    }, {
        "name": "Myles Munroe",
        "dob": "27 / 03 / 1997",
        "program": "Bsc Kingdom Principles",
        "level": "500",
        "image": "/images/mylesmunroe.jpg"
    },
    {
        "name": "Benny Hinn",
        "dob": "27 / 03 / 1995",
        "program": "Bsc Healing",
        "level": "800",
        "image": "/images/bennyhinn.jpg"
    },
    {
        "name": "Joshua Selman",
        "dob": "27 / 03 / 1989",
        "program": "Bsc Koinonia ",
        "level": "700",
        "image": "/images/joshuaselman.jpg"
    },
]

app.get('/', function(req, res) {
    res.render("home", {
        students

    });
});

//This is a route to a single student
app.get('/student/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];
    res.render("details", {
        student,
        title: 'details'
    });
});

app.listen(3000, () => {
    console.log("server is listing to port 3000");
});