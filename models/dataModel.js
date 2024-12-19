const db = require("../config/dbConfig");

// Função para buscar dados
const getData = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM data", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Função para criar dados
const createData = (label, value) => {
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO data (label, value) VALUES (?, ?)",
      [label, value],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

module.exports = { getData, createData };
