CREATE TABLE invoice (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER REFERENCES cart(id)
);

CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY(255),
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  cart_id INTEGER REFERENCES cart(id)
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY, 
  product_name VARCHAR(255),
  material VARCHAR(255),
  price INTEGER(255),
  image VARCHAR(255),
  inventory INTEGER
);
