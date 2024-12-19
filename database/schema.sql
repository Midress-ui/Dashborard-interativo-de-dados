CREATE DATABASE dashboard;

USE dashboard;

CREATE TABLE
  data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(50) NOT NULL,
    value INT NOT NULL
  );

INSERT INTO
  data (label, value)
VALUES
  ('Jan', 30),
  ('Feb', 20),
  ('Mar', 50);