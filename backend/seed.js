/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    const queries = [];

    /* ************************************************************************* */

    // Generating USERS columns
    queries.push(
      database.query(
        `INSERT INTO users (firstname, lastname, pseudoname, mail, birthdate, logdate, password) VALUES
      ('Admin', 'istrator', 'Administrator', 'administrator@email.com', '2000-01-01', '2000-01-02', '$2b$10$4VWdZ7SANvRr7qn3k6LAEu6eGApGQUvPOqcCCmgzVLKNlSpBL0rGa'),
      ('Mode', 'rator', 'Moderator', 'moderator@email.com', '2010-01-01', '2010-01-02', '$2b$10$c4u.4Q1LzVQBKm.SKX2nPuWEZ/I3jiMUygxr.mMZK4MVJilKYX0rC')`
      )
    );

    // Generating SHOPPING_CART columns
    queries.push(
      database.query(
        `INSERT INTO shopping_cart (user_id, item_id, item_type, quantity) VALUES
      (1, 1, 'foundation', 1),
      (1, 2, 'lipstick', 2),
      (2, 3, 'mascara', 1)`
      )
    );

    // Generating FOUNDATION columns
    queries.push(
      database.query(
        `INSERT INTO foundation (code_color, name_color, quantity, aspect, price) VALUES
      ('ABC123', 'Beige', 10, 'Matte', 20.99),
      ('DEF456', 'Rose', 15, 'Dewy', 25.99),
      ('GHI789', 'Tan', 8, 'Satin', 18.99)`
      )
    );

    // Generating LIPSTICK columns
    queries.push(
      database.query(
        `INSERT INTO lipstick (code_color, name_color, weight, aspect, price) VALUES
      ('JKL012', 'Red', 5, 'Matte', 15.99),
      ('MNO345', 'Pink', 4, 'Glossy', 12.99),
      ('PQR678', 'Brown', 6, 'Satin', 17.99)`
      )
    );

    // Generating MASCARA columns
    queries.push(
      database.query(
        `INSERT INTO mascara (code_color, name_color, quantity, effect, price) VALUES
      ('STU901', 'Black', 20, 'Lengthening', 14.99),
      ('VWX234', 'Brown', 15, 'Volumizing', 16.99),
      ('YZA567', 'Blue', 12, 'Curling', 19.99)`
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
