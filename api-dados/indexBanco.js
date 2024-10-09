const sql = require('mssql');

// Configurações do banco de dados SQL Server
const dbConfig = {
    user: 'seu_usuario',        // Seu nome de usuário do SQL Server
    password: 'sua_senha',      // Sua senha do SQL Server
    server: 'localhost',        // Host (ex: localhost, ou IP do servidor)
    database: 'seubanco',       // O nome do banco de dados
    options: {
        encrypt: false,         // Necessário se você estiver em uma conexão local (sem SSL)
        trustServerCertificate: true // Necessário para conexões locais não seguras
    }
};

// Função para conectar e buscar dados
async function getData() {
    try {
        // Conectar ao banco de dados
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query('SELECT * FROM sua_tabela');

        console.log(result.recordset); // Exibir os resultados no console
        return result.recordset;
    } catch (err) {
        console.error('Erro ao consultar o banco de dados:', err);
    } finally {
        sql.close(); // Fechar a conexão após a consulta
    }
}

// Executar a função
getData();
