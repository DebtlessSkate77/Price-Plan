import express from 'express';
import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const app = express();
const PORT = process.env.PORT || 4011;
app.listen(PORT, () => `Server started ${PORT}`)

const  db = await sqlite.open({
    filename:  './data_plan.db',
    driver:  sqlite3.Database
});

await db.migrate();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//

   // Import other required modules here

   app.post('/api/phonebill', async (req, res) => {
    // Calculate phone bill total using price plan data
    // Extract data from req.body, perform calculations, and send the total
});

app.get('/api/price_plans', async (req, res) => {
    // Retrieve a list of all available price plans from the database
    // Return the list in the response
});

app.post('/api/price_plan/create', async (req, res) => {
    // Create a new price plan using data from req.body
    // Insert data into the price_plan table in the database
});

app.post('/api/price_plan/update', async (req, res) => {
    // Update an existing price plan using data from req.body
    // Update the price_plan table in the database
});

app.post('/api/price_plan/delete', async (req, res) => {
    // Delete a price plan using data from req.body
    // Delete the corresponding record from the price_plan table in the database
});
