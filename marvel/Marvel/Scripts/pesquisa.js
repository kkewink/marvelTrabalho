function search() {
    var input = document.getElementById('searchInput').value;
    var inputLowercase = input.toLowerCase(); // Armazena a versão em minúsculas
    var resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Limpa os resultados anteriores
   
    // Remove o destaque de pesquisas anteriores
    var highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(function(element) {
      element.classList.remove('highlight');
    });
   
    // Função para percorrer todos os elementos de texto na página
    function searchInText(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        var text = node.textContent;
        var index = text.toLowerCase().indexOf(inputLowercase); // Use a versão em minúsculas
        if (index !== -1) {
          var before = document.createTextNode(text.substring(0, index));
          var match = document.createElement('span');
          match.textContent = text.substring(index, index + input.length);
          match.classList.add('highlight'); // Adiciona uma classe de destaque
          var after = document.createTextNode(text.substring(index + input.length));
          node.parentNode.insertBefore(before, node);
          node.parentNode.insertBefore(match, node);
          node.parentNode.insertBefore(after, node);
          node.parentNode.removeChild(node);
   
          // Rola automaticamente até o resultado
          match.scrollIntoView({ behavior: 'smooth', block: 'center' });
   
          return true;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i++) {
          if (searchInText(node.childNodes[i])) {
            return true;
          }
        }
      }
      return false;
    }
   
    // Percorre todos os elementos da página e procura por palavras-chave
    var found = searchInText(document.body);
   
    // Exibe o resultado da busca
    if (!found) {
      resultsContainer.innerHTML = '<p>Nenhuma correspondência encontrada.</p>';
    }
  }
   
  document.getElementById('searchInput').addEventListener('keyup', function(event) {
    // Verifica se a tecla pressionada foi a tecla "Enter"
    if (event.key === 'Enter') {
      // Chama a função de pesquisa
      search();
    }
  });
   