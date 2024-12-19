const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',         // Certifique-se que é o host correto
  user: 'root',              // Usuário do banco
  password: 'Mi-ui732!',     // Substitua pela senha correta do MySQL
  database: 'MySQL',     // Nome do banco de dados que está tentando acessar
  port: 3306,                // Porta padrão do MySQL (ou modifique se necessário)
});

// Testando conexão
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão ao banco de dados bem-sucedida!');
    connection.release();
  }
});
