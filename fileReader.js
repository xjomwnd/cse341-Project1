const fs = require('fs');

// Corrected filePath as a string representing a valid file path
const filePath = 'example.txt'; // Correct path to the file

// Using fs.readFileSync with the correct argument type
try {
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('File contents:', data);
} catch (err) {
  console.error('Error reading file:', err);
}
