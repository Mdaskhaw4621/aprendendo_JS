
document.getElementById('exibir_nome_id').addEventListener('click', function(){
   const nome = document.getElementById('nome_id').value;
   alert(`O nome completo é: ${nome} \n Possui ${nome.length} caracteres.`);
});