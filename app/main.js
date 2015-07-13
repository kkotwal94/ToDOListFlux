var component = require('./component'); //requiring our module export from component
var app = document.createElement('div'); //creating a element div
require('./stylesheets/main.css');

document.body.appendChild(app); //document body is taking the div app 
app.appendChild(component()); //and then div is inheriting the component function


