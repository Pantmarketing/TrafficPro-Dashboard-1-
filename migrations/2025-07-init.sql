CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

-- Gere o hash bcrypt da senha "171217Aa" e insira aqui
INSERT INTO users (username, password_hash, role)
VALUES (
  'Pant',
  '$2a$10$yWqJcTz5C2R8R4nRjQhMveKJxO9RK4nKfFZVqT8uD/4oQbGf3c3Fq', -- hash exemplo
  'master'
);

CREATE TABLE dashboards (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  business_model VARCHAR(255),
  sheets_url VARCHAR(500)
);

CREATE TABLE user_dashboards (
  user_id INT REFERENCES users(id),
  dashboard_id INT REFERENCES dashboards(id),
  PRIMARY KEY (user_id, dashboard_id)
);

CREATE TABLE dashboard_data (
  id SERIAL PRIMARY KEY,
  dashboard_id INT REFERENCES dashboards(id),
  date VARCHAR(20),
  investment NUMERIC,
  clicks INT,
  leads INT,
  conversations INT,
  sales INT,
  revenue NUMERIC
  -- adicione outros campos conforme necessário
);
