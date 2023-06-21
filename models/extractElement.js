const fs = require('fs');
/*
fs.readFile('./database/collections/news.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    // Access and work with the JSON data
    console.log(jsonData["1"]);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});
*/

function extracElement(filePath, element,callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
        return;
      }
  
      try {
        const jsonData = JSON.parse(data);
        callback(null, jsonData[element]);
      } catch (error) {
        callback(error, null);
      }
    });
  }

module.exports = extracElement;