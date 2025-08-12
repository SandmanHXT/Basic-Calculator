function adicionar(valor) {
    document.getElementById('display').value += valor;
  }
  
  function limpar() {
    document.getElementById('display').value = '';
  }
  
  function apagar() {
    let valor = document.getElementById('display').value;
    document.getElementById('display').value = valor.slice(0, -1);
  }
  
  function calcular() {
    try {
      let resultado = eval(document.getElementById('display').value);
      document.getElementById('display').value = resultado;
    } catch {
      document.getElementById('display').value = 'Erro';
    }
  }