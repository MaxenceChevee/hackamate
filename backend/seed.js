require("dotenv").config();

const database = require("./database/client");

const seed = async () => {
  try {
    const queries = [];

    // queries.push(
    //   database.query(
    //     `INSERT INTO comments (user_id, product_id, product_type, comment_text) VALUES
    //     (1, 1, 'mascara', 'C’est un excellent mascara!'),
    //     (2, 1, 'mascara', 'Je n’ai pas aimé la texture.'),
    //     (1, 2, 'mascara', 'Parfait pour un look quotidien.'),
    //     (2, 3, 'foundation', 'Ce fond de teint est incroyable!'),
    //     (1, 4, 'foundation', 'Il s’adapte parfaitement à ma peau.'),
    //     (2, 5, 'lipstick', 'La couleur de ce rouge à lèvres est magnifique!'),
    //     (1, 6, 'lipstick', 'Je ne m’attendais pas à aimer autant ce rouge à lèvres.')`
    //   )
    // );

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
      ('Brow artist mascara perfecteur sourcils etoffés', '#F3F3F3', 'Transparent', 10, 'Volumateur', 19.95, 'https://i.postimg.cc/HLXnX50y/Capture-decran-2024-01-17-165131.webp'),
      ('Age perfect mascara densifiant', '#391E17', 'Marron', 9, 'Densifieur', 12.90, 'https://i.postimg.cc/dt7YhCKm/image.webp'),
      ('Telescopic', '#231F20', 'Noir', 12, 'Allongement', 14.50, 'https://i.postimg.cc/FF6jyM25/image.webp'),
      ('Mascara panorama volume millions de cils', '#53352D', 'Marron', 10, 'Volumateur', 12.90, 'https://i.postimg.cc/Y9HmDktj/image.webp'),
      ('Magic retouch précision', '#553B2F', 'Chatain', 10, 'Bouclage', 12.90, 'https://i.postimg.cc/9fdFg78H/image.webp'),
      ('Mascara bambi eye faux cils noir intense', '#000000', 'Noir', 10, 'Allongement', 14.50, 'https://i.postimg.cc/yxr0zT5G/Capture-d-cran-2024-01-17-230530.png'),
      ('Mascara Lash Paradise Waterproof', '#000000', 'Noir', 15, 'Volumateur', 11.50, 'https://i.postimg.cc/903Y4b1q/Capture-d-cran-2024-01-17-231033.png'),
      ('Mascara Lash Paradise Noir Intense', '#000000', 'Noir', 13, 'Densifieur', 14, 'https://i.postimg.cc/7hvjxg2K/Capture-d-cran-2024-01-17-231305.png'),
      ('Mascara Bambi Eye Faux Cils Waterproof', '#000000', 'Noir', 15, 'Bouclage', 17, 'https://i.postimg.cc/wvwLLsLg/Capture-d-cran-2024-01-17-231649.png'),
      ('Volume Millions de Cils Mascara volume intense et soin', '#000000', 'Noir', 10, 'Allongemnt', 15, 'https://i.postimg.cc/Nj6PHBGb/Capture-d-cran-2024-01-17-232125.png')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO foundation (name, codeColor, nameColor, quantity, aspect, price, image_link) VALUES
      ('Fond de teint accord parfait', '#BE815B', 'Soleil rose', 20, 'Mate', 14, 'https://i.postimg.cc/YqRf4dQT/Capture-decran-2024-01-17-164403.webp'),
      ('Poudre accord parfait', '#825439', 'Doré foncé', 18, 'Satin', 12.50, 'https://i.postimg.cc/wjcXK0jw/Capture-decran-2024-01-17-164524.webp'),
      ('Fond de teint infaillible 32 matte cover', '#DAA682', 'Miel éclat', 15, 'Mate', 14.90, 'https://i.postimg.cc/zfd01kkY/Capture-decran-2024-01-17-164639.webp'),
      ('Sérum teinté accord parfait', '#CF9B78', 'Lumiére', 20, 'Brillant', 17, 'https://i.postimg.cc/rmHTzxMv/Capture-decran-2024-01-17-164737.webp'),
      ('Fond de teint en poudre infaillible 24h', '#795746', 'Ebéne', 18, 'Satin', 13, 'https://i.postimg.cc/zDjhVfg0/Capture-decran-2024-01-17-164856.webp')`
      )
    );

    queries.push(
      database.query(
        `INSERT INTO lipstick (name, codeColor, nameColor, quantity, aspect, price, image_link) VALUES
      ('Color riche rouge à lèvres', '#AF6B6E', 'Le nude admirable', 30, 'Matte', 16.99, 'https://i.postimg.cc/MHd9W2R5/image.webp'),
      ('Rouge à lévres longue tenue infaillible 24h duo', '#BB604E', 'Corail constant', 25, 'Satin', 15, 'https://i.postimg.cc/NGNNPnq4/image.webp'),
      ('Color riche rouge à lèvres', '#B6191F', 'Rouge passion', 25, 'Brillant', 18.50, 'https://i.postimg.cc/sf5L1x5B/image.webp'),
      ('Baume à lèvres teinté glow paradise', '#CC8074', 'Beige eden', 30, 'Satin', 17.25, 'https://i.postimg.cc/vBdg30Tt/image.webp'),
      ('Color riche rouge à lévres', '#B6191F', 'Rouge passion', 30, 'Mate', 18.50, 'https://i.postimg.cc/fRyW4ybP/image.webp'),
      ('L’Oréal Paris infaillible matte resistance', '#B52030', 'La vraie romance', 25, 'Mate', 15.50, 'https://i.postimg.cc/Nj6PHBGb/Capture-d-cran-2024-01-17-232125.png'),
      ('Color riche rouge à Lèvres ultra mat free the nudes', '#CC8070', 'Pas de cliché', 20, 'Mate', 17, 'https://i.postimg.cc/y8NhjK77/Capture-d-cran-2024-01-17-233113.png'),
      ('Age perfect le rouge lumière', '#BC4022', 'Brique perlée', 20, 'Brillant', 14.90, 'https://i.postimg.cc/y8NhjK77/Capture-d-cran-2024-01-17-233113.png'),
      ('Color riche rouge à lèvres mat', '#C74D5C', 'Frappez une rose', 25, 'Mate', 16.99, 'https://i.postimg.cc/Qx4gv8gY/Capture-d-cran-2024-01-17-234315.png'),
      ('Rouge Signature Encre à Lèvres Liquide Mate', '#E88A70', 'Renforcer L&#39;autonomie', 20, 'Brillant', 17, 'https://i.postimg.cc/hPLwW7Z4/Capture-d-cran-2024-01-17-235122.pngs')`
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
