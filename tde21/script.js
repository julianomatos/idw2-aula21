const tarefa = document.getElementById('task')

function adicionar(){
    const nomeTarefa = tarefa.value
    const li = document.createElement('li')
    
    const btnRemover = document.createElement('button')
    btnRemover.innerText = 'Excluir'
    btnRemover.style.marginLeft = '10px'
    btnRemover.addEventListener('click', function(){li.remove()})
    const btnConcluir = document.createElement('button')
    btnConcluir.innerText = 'Concluir'
    btnConcluir.style.marginLeft = '10px'
   // btn.addEventListener('click', remover)
    
    li.innerText = nomeTarefa
    li.appendChild(btnRemover)
    li.appendChild(btnConcluir)
    const ul = document.getElementById('tarefasPendentes')
    ul.appendChild(li)
}