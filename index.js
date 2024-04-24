const fs = require('fs');
const csv = require('csv-parser');

// Initialize an empty array to store JSON objects
const json_data = [];
const filename = 'samsung'
// Read the CSV file
fs.createReadStream(__dirname+`/${filename}.csv`)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row
    processRow(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
    // Write the JSON data to a file
    writeJSONToFile();
  });

// Function to process each row
function processRow(row) {
  // Check if the product already exists in the JSON data
  const existingProduct = json_data.find((product) => product['Product Name'] === row['Product Name']);

  // If the product exists, add the price data to its Prices array
  if (existingProduct) {
    existingProduct['Prices'].push({
      'Month': row['Month'],
      'amazon': parseInt(row['amazon']),
      'flipkart': parseInt(row['flipkart']),
      'croma': parseInt(row['croma'])
    });
  } else {
    // If the product doesn't exist, create a new entry for it in the JSON data
    json_data.push({
      'Product Name': row['Product Name'],
      'Prices': [{
        'Month': row['Month'],
        'amazon': parseInt(row['amazon']),
        'flipkart': parseInt(row['flipkart']),
        'croma': parseInt(row['croma'])
      }]
    });
  }
}

// Write the JSON data to a file
function writeJSONToFile() {
  const jsonDataString = JSON.stringify(json_data, null, 2);
  const file = `${filename}.json`
  fs.writeFileSync(file, jsonDataString);
  console.log('JSON data saved to output.json');
}
