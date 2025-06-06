// db.js
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

let db = null;

const dbconnect = () => {
    if (db) {
        console.log("Database already connected.");
        return;
    }

    const pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE_NAME,
        port: process.env.SQL_PORT,
    });
    
    db = pool.promise(); // Convert the pool to a promise-based pool

    db.getConnection((err, connection) => {
        if (err) {
            console.error("Error connecting to MySQL:", err.message);
        } else {
            console.log("Connected to MySQL database!");
            connection.release(); // Release the connection back to the pool taki pool fill na ho jaye connections se taki future me queries run krne ke liye pool me jgah ho
        }
    });
};

export { dbconnect, db };
