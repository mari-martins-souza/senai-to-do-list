document.getElementById("botao-nova-tarefa").addEventListener("click", function() {
    let novaAtividade = document.getElementById("nova-atividade");
    if (novaAtividade.value !== "") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let li = document.createElement("li");
        // let botaoRemover = document.createElement("button");
        let iconeLixeira = document.createElement("img");
        iconeLixeira.src = "../img/lixeira.png"
        // botaoRemover.appendChild(iconeLixeira);
        // botaoRemover.style.float = "right";
        iconeLixeira.style.float = "right";
       

        iconeLixeira.addEventListener("click", function() {
            this.parentElement.remove()
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(novaAtividade.value));
        li.appendChild(iconeLixeira);
            
        
        let addNovaTarefa = document.getElementById("lista-tarefas");
        addNovaTarefa.appendChild(li);
        novaAtividade.value = "";

        checkbox.className = "checkbox";
        botaoRemover.className ="botao-remover";
        
    }
});

let checkboxFixo = document.getElementsByClassName("checkbox-fixo");
let botaoRemoverFixo = document.getElementsByClassName("botao-remover-fixo");

for (let i = 0; i < botaoRemoverFixo.length; i++) {
    botaoRemoverFixo[i].addEventListener("click", function () {
        this.parentElement.remove();
    });

}



