var request = new XMLHttpRequest();
request.open("GET", "../database/collections/news.json", false);
request.send(null);
var jsonString = request.responseText;

// Parsear el JSON
var data = JSON.parse(jsonString);

// Acceder a los datos del JSON
console.log(data.clave); // Donde 'clave' es la clave que deseas acceder dentro del JSON