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
        `INSERT INTO mascara (name, codeColor, nameColor, quantity, effect, price, image_link) VALUES
      ('Brow artist mascara perfecteur sourcils etoffés', '#F3F3F3', 'Transparent', 10, 'Volumateur', 19.95, 'https://postimg.cc/f3WMhVrz'),
      ('Age perfect mascara densifiant', '#391E17', 'Marron', 9, 'Densifieur', 12.90, 'https://postimg.cc/2VfJJVyV'),
      ('Telescopic', '#231F20', 'Noir', 12, 'Allongement', 14.50, 'https://postimg.cc/6Td2wmWY'),
      ('Mascara panorama volume millions de cils', '#53352D', 'Marron', 10, 'Volumateur', 12.90, 'https://postimg.cc/zLxB3sb1'),
      ('Magic retouch précision', '#553B2F', 'Chatain', 10, 'Bouclage', 12.90, 'https://postimg.cc/XZvbpp6s')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO foundation (name, codeColor, nameColor, quantity, aspect, price, image_link) VALUES
      ('Fond de teint accord parfait', '#BE815B', 'Soleil rose', 20, 'Mate', 14, 'https://postimg.cc/crK82M9c'),
      ('Poudre accord parfait', '#825439', 'Doré foncé', 18, 'Satin', 12.50, 'https://postimg.cc/FYzd3bcS'),
      ('Fond de teint infaillible 32 matte cover', '#DAA682', 'Miel éclat', 15, 'Mate', 14.90, 'https://postimg.cc/jW7zHP9M'),
      ('Sérum teinté accord parfait', '#CF9B78', 'Lumiére', 20, 'Brillant', 17, 'https://postimg.cc/Fd08BffZ'),
      ('Fond de teint en poudre infaillible 24h', "#795746", 'Ebéne', 18, 'Satin', 'https://postimg.cc/s1MxLsKh')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO lipstick (name, codeColor, nameColor, weight, aspect, price, image_link) VALUES
      ('Color riche rouge à lèvres', '#AF6B6E', 'Le nude admirable', 30, 'Matte', 16.99, 'https://postimg.cc/m11Ywnm1'),
      ('Rouge à lévres longue tenue infaillible 24h duo', '#BB604E', 'Corail constant', 25, 'Satin', 15, 'https://postimg.cc/MXQbndGM'),
      ('Color riche rouge à lèvres', '#B6191F', 'Rouge passion', 25, 'Brillant', 18.50, 'https://postimg.cc/8sP401KD'),
      ('Baume à lèvres teinté glow paradise', '#CC8074', 'Beige eden', 30, 'Satin', 17.25, 'https://postimg.cc/3ynxwCgk'),
      ('Color riche rouge à lévres', '#B6191F', 'Rouge passion', 30, 'Mate', 18.50, 'https://postimg.cc/LJdFLHLk')`
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
