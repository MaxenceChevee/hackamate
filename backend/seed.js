require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    queries.push(
      database.query(
        `INSERT INTO users (firstname, lastname, pseudoname, mail, birthdate, logdate, password) VALUES
      ('Admin', 'istrator', 'Administrator', 'administrator@email.com', '2000-01-01', '2000-01-02', '$2b$10$4VWdZ7SANvRr7qn3k6LAEu6eGApGQUvPOqcCCmgzVLKNlSpBL0rGa'),
      ('Mode', 'rator', 'Moderator', 'moderator@email.com', '2010-01-01', '2010-01-02', '$2b$10$c4u.4Q1LzVQBKm.SKX2nPuWEZ/I3jiMUygxr.mMZK4MVJilKYX0rC')`
      )
    );

    await Promise.all(queries);

    queries.push(
      database.query(
        `INSERT INTO shopping_cart (user_id) VALUES
      (1),
      (2)`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO mascara (codeColor, nameColor, quantity, effect, price, image_link) VALUES
      ('ABC123', 'Beige', 10, 'Lengthening', 20.99, 'https://example.com/mascara1.jpg'),
      ('DEF456', 'Rose', 15, 'Volumizing', 25.99, 'https://example.com/mascara2.jpg'),
      ('GHI789', 'Tan', 8, 'Curling', 18.99, 'https://example.com/mascara3.jpg')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO foundation (codeColor, nameColor, quantity, aspect, price, image_link) VALUES
      ('JKL012', 'Red', 5, 'Matte', 15.99, 'https://example.com/foundation1.jpg'),
      ('MNO345', 'Pink', 4, 'Glossy', 12.99, 'https://example.com/foundation2.jpg'),
      ('PQR678', 'Brown', 6, 'Satin', 17.99, 'https://example.com/foundation3.jpg')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO lipstick (codeColor, nameColor, weight, aspect, price, image_link) VALUES
      ('STU901', 'Black', 20, 'Matte', 14.99, 'https://example.com/lipstick1.jpg'),
      ('VWX234', 'Brown', 15, 'Satin', 16.99, 'https://example.com/lipstick2.jpg'),
      ('YZA567', 'Blue', 12, 'Glossy', 19.99, 'https://example.com/lipstick3.jpg')`
      )
    );

    await Promise.all(queries);

    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

seed();
