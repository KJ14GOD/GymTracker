const express = require('express');
const app = express();
const port = 8000;
const mysql = require('mysql2');
const cors = require('cors');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Carrom12',
  database: 'gym'
});

const pool2 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Carrom12',
  database: 'gym'
});

const pool3 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Carrom12',
  database: 'gym'
});

const pool4 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Carrom12',
  database: 'gym'
});


app.use(express.json());
app.use(cors()); // Add cors middleware

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});


app.get('/api/data', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'SELECT * FROM workout_data';
    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }

      res.json(results);
    });
  });
});


app.post('/api/form', (req, res) => {
  const formData = req.body;

  // Insert the form data into the MySQL database
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'INSERT INTO workout_data SET ?';
    connection.query(query, formData, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('Data from table:', results);


      return res.status(200).json({ success: true });
    });
  });
});
// app.post('/api/createworkout', (req, res) => {
//   const formData = req.body;

//   // Insert the form data into the MySQL database
//   pool2.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error getting MySQL connection:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }

//     const query = 'INSERT INTO myworkoutcard SET ?';
//     connection.query(query, formData, (error, results) => {
//       connection.release();

//       if (error) {
//         console.error('Error executing MySQL query:', error);
//         return res.status(500).json({ error: 'Database error' });
//       }
//       console.log('Data inserted into the myworkoutcard table:', results);

//       return res.status(200).json({ success: true });
//     });
//   });
// });

app.post('/api/createworkout', (req, res) => {
  const formData = req.body;
  formData.exercises = JSON.stringify(formData.exercises); // Serialize exercises as JSON

  // Insert the form data into the MySQL database
  pool2.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'INSERT INTO myworkoutcard SET ?';
    connection.query(query, formData, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('Data inserted into the myworkoutcard table:', results);

      return res.status(200).json({ success: true });
    });
  });
});



app.get('/api/workout-dates', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'SELECT DISTINCT date FROM workout_data'; // Modify the table name if necessary
    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }

      const workoutDates = results.map((row) => row.date);
      res.json(workoutDates);
    });
  });
});

app.get('/api/myworkoutcard', (req, res) => {
  // Retrieve the data from the myworkoutcard table
  pool2.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'SELECT * FROM myworkoutcard';
    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(results);
    });
  });
});


app.post('/api/creatediet', (req, res) => {
  const formData = req.body;
  const { breakfast, lunch, dinner } = formData;

  pool3.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'INSERT INTO diets2 (breakfast, lunch, dinner) VALUES (?, ?, ?)';

    connection.query(query, [JSON.stringify(breakfast), JSON.stringify(lunch), JSON.stringify(dinner)], (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('Data inserted into the diets2 table:', results);

      return res.status(200).json({ success: true });
    });
  });
});

app.get('/api/diets', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'SELECT * FROM diets2';

    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }

      return res.status(200).json(results);
    });
  });
});

app.post('/api/exercises', (req, res) => {
  const formData = req.body;

  // Insert the form data into the MySQL database
  pool4.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'INSERT INTO exercises SET ?';
    connection.query(query, formData, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }
      console.log('Data inserted into the exercises table:', results);

      return res.status(200).json({ success: true });
    });
  });
});

app.get('/api/getexercises', (req, res) => {
  // Fetch data from the MySQL database
  pool4.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const query = 'SELECT * FROM exercises';
    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        console.error('Error executing MySQL query:', error);
        return res.status(500).json({ error: 'Database error' });
      }

      // Send the fetched data as a response
      return res.status(200).json(results);
    });
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
