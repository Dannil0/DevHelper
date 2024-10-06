const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir que a API trabalhe com JSON
app.use(express.json());

// Rota GET básica (Exemplo)
app.get('/api/feed', (req, res) => {
    res.json([
        { id: 1, title: 'Post 1', content: 'Este é o conteúdo do post 1', date: '2024-10-05' },
        { id: 2, title: 'Post 2', content: 'Este é o conteúdo do post 2', date: '2024-10-04' }
    ]);
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
