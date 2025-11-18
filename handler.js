const fs = require('fs');
const path = require('path');

// Helper function to read the HTML file
const readFileSync = (filePath) => {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
};

module.exports.web = async () => {
  // Serve the digital_space.html page
  const html = readFileSync('digital_space.html');

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
    body: html
  };
};
