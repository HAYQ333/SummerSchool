const fs = require('fs');
const http = require('http');
let odd,even;
const server = http.createServer((req, res) => {
  // Read the JSON file
  fs.readFile('odd.json', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading JSON file: ' + err.message);
      return;
    }

    try {
      odd= JSON.parse(data); // Parse JSON to get the array
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error parsing JSON: ' + e.message);
      return;
    }

	  fs.readFile('even.json', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading JSON file: ' + err.message);
        return;
      }

      try {
        even= JSON.parse(data); // Parse JSON to get the array
      } catch (e) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error parsing JSON: ' + e.message);
        return;
      }
      let sum = "";
      console.log(sum);
      
for(let i = 0; i < 5; i++) {
  sum += (odd[i] + even[i]) + ", ";
}


    // Generate HTML with embedded JavaScript
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          ${sum}  
        </body>
      </html>
    `;

    // Serve the HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  });
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
