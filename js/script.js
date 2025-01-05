const addBtn = document.querySelector('#add-btn')

function adicionarTarefa() {

    const ListaEntrada = document.querySelector('#lista-entrada').value

    if(ListaEntrada) {

        const tarefa = document.querySelector('.interface')

        let novaTarefa = tarefa.cloneNode(true)

        novaTarefa.querySelector('#titulo').textContent = ListaEntrada

        // Remover classes desnecessarias
        novaTarefa.classList.remove('template')
        novaTarefa.classList.remove('hide')

        // Adicionar tarefa
        const listaDeTarefas = document.querySelector('#lista-tarefas')
        listaDeTarefas.appendChild(novaTarefa)

        // concluir tarefa
        novaTarefa.querySelector('.concluir-tarefa').addEventListener('click', function() {
            tarefaConcluido(this)
        })

        novaTarefa.querySelector('.deletar-tarefa').addEventListener('click', function() {
            tarefaDeletada(this)
        })

        document.querySelector('#lista-entrada').value = ''

    }

}

function tarefaConcluido(task) {
    let select = task.parentNode

    select.classList.toggle('concluir')
}

function tarefaDeletada(task) {
    task.parentNode.remove(true)
}

addBtn.addEventListener('click', function(e) {

    e.preventDefault()

    adicionarTarefa()
})

addBtn.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        adicionarTarefa()
    }
})