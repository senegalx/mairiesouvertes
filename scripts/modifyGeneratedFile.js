const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'lib', 'gql', 'generated.ts');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifiedContent = data.replace(
    "import { gql } from '@apollo/client';",
    "import pkg from '@apollo/client';\nconst { gql } = pkg;"
  );

  fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File successfully modified');
  });
});