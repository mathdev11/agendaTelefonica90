const form = document.getElementById('form-cliente');
const nome = [];
const telefone = [];

let linhas = '';


form .addEventListener('submit', function(e){
    e.preventDefault();

    atualizaTabela();
    adicionaLinha();
});

function adicionaLinha(){
    const inputNomeCliente = document.getElementById('nome-cliente');
    const inputNumeroCliente = document.getElementById('telefone-cliente');

    if(nome.includes(inputNomeCliente.value)){
        alert(`O cliente ${inputNomeCliente.value} já existe no sistema`);xxxxx
    }else{
        nome.push(inputNomeCliente.value);
        telefone.push(parseFloat(inputNumeroCliente));

        let linha = `<tr>`;
        linha += `<td>${inputNomeCliente.value}</td>`;
        linha += `<td>${inputNumeroCliente.value}<td>`;
        linha += `<tr>`;

        linhas += linha;
    }

    inputNomeCliente.value = '';
    inputNumeroCliente.value = '';
}    
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
