document.getElementById("botao-nova-tarefa").addEventListener("click",  function() {
    let novaAtividade = document.getElementById("nova-atividade");
    if (novaAtividade.value !== "") {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        let li = document.createElement("li");
        let iconeLixeira = document.createElement("img");
        iconeLixeira.src = "img/lixeira-x.png"
        iconeLixeira.style.float = "right";

        // o span foi necessário somente por causa da função de riscar
        // o texto dentro do <li> quando a checkbox estiver marcada
        let span = document.createElement("span");
        span.appendChild(document.createTextNode(novaAtividade.value));
        
    iconeLixeira.addEventListener("click", function() {
        let confirmacao = confirm("A exclusão não pode ser revertida, tem certeza?");
            if (confirmacao) {
                this.parentElement.remove()   
                atualizarContador();     
    }
});

        checkbox.addEventListener("change", function() {
            if(this.checked) {
                this.nextSibling.style.textDecoration = "line-through";
            } else {
                this.nextSibling.style.textDecoration = "none";
            }
        });

    iconeLixeira.className ="icone-lixeira";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(iconeLixeira);
            
        
    let addNovaTarefa = document.getElementById("lista-tarefas");
    addNovaTarefa.appendChild(li);
    atualizarContador();
    novaAtividade.value = "";

    checkbox.className = "checkbox";
    }
});

let checkboxFixo = document.getElementsByClassName("checkbox-fixo");
let botaoRemoverFixo = document.getElementsByClassName("icone-lixeira-fixa");

for (let i = 0; i < botaoRemoverFixo.length; i++) {
    botaoRemoverFixo[i].addEventListener("click", function () {
        let confirmacao = confirm("A exclusão não pode ser revertida, tem certeza?");
            if (confirmacao) {
        this.parentElement.remove();
        atualizarContador(); 
    }
})
};

let checkboxFixas = document.getElementsByClassName("checkbox-fixo")

for (let i = 0; i < checkboxFixas.length; i++) {
    checkboxFixas[i].addEventListener("change", function () {
        if(this.checked) {
        this.nextSibling.style.textDecoration = "line-through";
            } else {
                this.nextSibling.style.textDecoration = "none";
            }
    })
};

function atualizarContador() {
    let contador = document.getElementById("contador-texto");
    let listaTarefas = document.getElementById("lista-tarefas");
    contador.innerText = "Tarefas em aberto: " + listaTarefas.children.length;
}

