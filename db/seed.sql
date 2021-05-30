-- DROP TABLE IF EXISTS cart_items;
-- DROP TABLE IF EXISTS invoice;
-- DROP TABLE IF EXISTS products;
-- DROP TABLE IF EXISTS users;


-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255),
--   password VARCHAR(500)
-- );

-- CREATE TABLE products (
--   id SERIAL PRIMARY KEY, 
--   product_name VARCHAR(255),
--   material VARCHAR(255),
--   price MONEY,
--   image VARCHAR(255),
--   inventory INTEGER
-- );

-- CREATE TABLE invoice (
--   id SERIAL PRIMARY KEY,
--   cart_id INTEGER REFERENCES cart(id)
-- );

-- CREATE TABLE cart_items (
--   id SERIAL PRIMARY KEY,
--   user_id INTEGER REFERENCES users(id),
--   product_id INTEGER REFERENCES products(id),
--   quantity INTEGER
-- );



DROP TABLE IF EXISTS cart_items;
DROP TABLE IF EXISTS invoice;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(500)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY, 
  product_name VARCHAR(255),
  material VARCHAR(255),
  price MONEY,
  image VARCHAR(255),
  inventory INTEGER
);

CREATE TABLE invoice (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES cart(id)
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER
);


