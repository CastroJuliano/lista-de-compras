document.getElementById("addItemButton").addEventListener("click", function(event) {
  event.preventDefault(); // Previne o comportamento padrão

  addItem();  // Chama a função para adicionar o item
});

// Adicionando o evento para pressionar a tecla Enter
document.getElementById("itemInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  // Verifica se a tecla pressionada é "Enter"
    event.preventDefault();  // Previne o comportamento padrão de envio do formulário
    addItem();  // Chama a função para adicionar o item
  }
});

function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemValue = itemInput.value.trim();

  // Validação personalizada: se o campo estiver vazio
  if (itemValue === "") {
    // Exibe uma mensagem de erro personalizada
    alert("Por favor, insira um item para adicionar.");
    return;
  }

  const ul = document.getElementById("shoppingList");
  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="checkItem" />
    <span class="itemText">${itemValue}</span>
    <button class="remove"></button>
  `;

  // Marcar item como comprado
  li.querySelector(".checkItem").addEventListener("change", function() {
    li.classList.toggle("checked");
  });

  // Remover item e exibir a caixa de aviso
  li.querySelector(".remove").addEventListener("click", function() {
    ul.removeChild(li);

    // Exibir a caixa de aviso
    const alertBox = document.getElementById("alertBox");
    alertBox.style.display = 'block';

    // Esconder a caixa de aviso após 3 segundos
    setTimeout(function() {
      alertBox.style.display = 'none';
    }, 5000);
  });

  ul.appendChild(li);
  itemInput.value = ""; // Limpar o campo de entrada
};

// Fechar a caixa de aviso manualmente
document.getElementById("closeAlertButton").addEventListener("click", function() {
  document.getElementById("alertBox").style.display = 'none';
});

