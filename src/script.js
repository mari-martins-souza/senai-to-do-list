document.getElementById("botao-nova-tarefa").addEventListener("click", function() {
    let novaAtividade = document.getElementById("nova-atividade");
    if (novaAtividade.value !== "") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let li = document.createElement("li");
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.style.float = "right";

        botaoRemover.addEventListener("click", function() {
            this.parentElement.remove()
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(novaAtividade.value));
        li.appendChild(botaoRemover);
            
        
        let addNovaTarefa = document.getElementById("lista-tarefas");
        addNovaTarefa.appendChild(li);
        novaAtividade.value = "";

        checkbox.className = "checkbox";
        botaoRemover.className ="botao-remover";
        
    }
});

