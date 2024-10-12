function desmarcarTodos() {
    var checkboxes = document.querySelectorAll('.form-check-input');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    })
}

function uploadFile() {
    const file = document.getElementById('fileInput').files[0];

    if (!file) {
        document.getElementById('status').innerText = "Nenhum arquivo selecionado!";
        return;
    }

    const formData = new FormData();
    formData.append('arquivo',file);

    const xhr = new XMLHttpRequest();

    xhr.open('POST','/upload');

    setTimeout(() => {
        xhr.status = 200;
        xhr.responseText = 'Arquivo enviado com sucesso!'

        xhr.onload();
    }, 1000);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('status').innerText = xhr.responseText;
        } else {
            document.getElementById('status').innerText = 'Erro ao enviar o arquivo!'
        }
    }
}