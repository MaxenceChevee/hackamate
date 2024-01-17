DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS mascara;
DROP TABLE IF EXISTS foundation;
DROP TABLE IF EXISTS lipstick;
DROP TABLE IF EXISTS users;

CREATE TABLE mascara (
  id INT NOT NULL AUTO_INCREMENT,
  code_color VARCHAR(30) NOT NULL,
  name_color VARCHAR(30) NOT NULL,
  quantity INT NOT NULL,
  effect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE foundation (
  id INT NOT NULL AUTO_INCREMENT,
  code_color VARCHAR(30) NOT NULL,
  name_color VARCHAR(30) NOT NULL,
  quantity INT NOT NULL,
  aspect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE lipstick (
  id INT NOT NULL AUTO_INCREMENT,
  code_color VARCHAR(30) NOT NULL,
  name_color VARCHAR(30) NOT NULL,
  weight INT NOT NULL,
  aspect VARCHAR(30) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
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
  item_id INT NOT NULL,
  item_type VARCHAR(30) NOT NULL,
  quantity INT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  CHECK (item_type IN ('mascara', 'foundation', 'lipstick'))
);

ALTER TABLE shopping_cart ADD CONSTRAINT fk_shopping_cart_mascara FOREIGN KEY (item_id) REFERENCES mascara(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE shopping_cart ADD CONSTRAINT fk_shopping_cart_foundation FOREIGN KEY (item_id) REFERENCES foundation(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE shopping_cart ADD CONSTRAINT fk_shopping_cart_lipstick FOREIGN KEY (item_id) REFERENCES lipstick(id) ON UPDATE CASCADE ON DELETE CASCADE;
