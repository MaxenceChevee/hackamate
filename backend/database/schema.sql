DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS mascara;
DROP TABLE IF EXISTS foundation;
DROP TABLE IF EXISTS lipstick;
DROP TABLE IF EXISTS users;

CREATE TABLE mascara (
  id INT NOT NULL AUTO_INCREMENT,
  codeColor VARCHAR(30) NOT NULL,
  nameColor VARCHAR(30) NOT NULL,
  quantity INT NOT NULL,
  effect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_link VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE foundation (
  id INT NOT NULL AUTO_INCREMENT,
  codeColor VARCHAR(30) NOT NULL,
  nameColor VARCHAR(30) NOT NULL,
  quantity INT NOT NULL,
  aspect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_link VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE lipstick (
  id INT NOT NULL AUTO_INCREMENT,
  codeColor VARCHAR(30) NOT NULL,
  nameColor VARCHAR(30) NOT NULL,
  weight INT NOT NULL,
  aspect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_link VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(30) DEFAULT NULL,
  lastname VARCHAR(30) DEFAULT NULL,
  pseudoname VARCHAR(30) NOT NULL,
  mail VARCHAR(90),
  birthdate DATE NOT NULL,
  logdate DATE NOT NULL,
  password VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE shopping_cart (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE cart_items (
  id INT NOT NULL AUTO_INCREMENT,
  cart_id INT NOT NULL,
  item_id INT NOT NULL,
  item_type VARCHAR(30) NOT NULL,
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY (cart_id) REFERENCES shopping_cart(id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (item_id) REFERENCES mascara(id) ON UPDATE CASCADE ON DELETE CASCADE,
  CHECK (item_type IN ('mascara', 'foundation', 'lipstick'))
);

