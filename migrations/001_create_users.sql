CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'cliente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_dashboards (
  user_id INTEGER NOT NULL,
  dashboard_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, dashboard_id)
);

INSERT INTO users (username, password_hash, role)
VALUES ('anderson', '$2b$10$9eQG2jG31yN7wRqG2u02h.x/ZqpvTellrqg.ARO7ETWJf2Gs11BwS', 'master');
