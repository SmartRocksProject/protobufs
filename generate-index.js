// Import the required modules
const fs = require('fs');
const path = require('path');

// Define the directory containing the generated files
const generatedDirectory = 'generated';

// Define the path to the index.js file
const indexFile = path.join(generatedDirectory, 'index.js');

// Read the files in the generated directory
const generatedFiles = fs.readdirSync(generatedDirectory);

// Filter and create export statements for the files with _pb.js or _grpc_pb.js suffixes
const exports = generatedFiles
  .filter(file => file.endsWith('_pb.js') || file.endsWith('_grpc_pb.js'))
  .map(file => `export * from './${file}';`)
  .join('\n');

// Write the export statements to the index.js file
fs.writeFileSync(indexFile, exports);
