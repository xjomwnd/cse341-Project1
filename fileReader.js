// fileReader.js
const fs = require('fs');

// Example of passing an object instead of a string path
const filePath = './example.txt'; // Corrected to a string representing a valid file path

// Trying to use fs.readFileSync with an invalid argument type
try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
