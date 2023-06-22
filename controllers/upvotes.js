const fs = require('fs');

function upvotes(filePath, element, callback) {
    campo="upvotes"
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) {
          console.error(`Error al leer el archivo ${filePath}: ${error}`);
          return;
        }
    
        try {
          const jsonData = JSON.parse(data);
          jsonData[campo] = jsonData[campo]+1;
    
          fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (error) => {
            if (error) {
              console.error(`Error al escribir en el archivo ${filePath}: ${error}`);
              return;
            }
    
            console.log(`Campo "${campo}" modificado correctamente en el archivo ${filePath}.`);
          });
        } catch (error) {
          console.error(`Error al analizar el archivo JSON ${filePath}: ${error}`);
        }
      });
  }

module.exports = upvotes;