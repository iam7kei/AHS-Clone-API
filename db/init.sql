CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(150) UNIQUE,
  password TEXT
);

INSERT INTO users (id, first_name, last_name, email, password) VALUES
  (
    '1e614814-5dc6-4d17-bda8-69d39e2100d2',
    'Lyn',
    'Holly',
    'lholly@ahs.com',
    '$argon2i$v=19$m=16,t=2,p=1$cGpDSzlCZXo5c3cxcUNRQQ$pn+wGTAbE0OMzeEYnVMWOg'
  );