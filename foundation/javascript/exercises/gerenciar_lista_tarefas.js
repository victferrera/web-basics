// Exercício: Manipulação de Arrays

// Enunciado:

// Você está desenvolvendo uma aplicação para gerenciar uma lista de tarefas (to-do list). Sua tarefa é criar uma função que execute as seguintes operações em um array de tarefas:

//     Adicionar Tarefa: Adicione uma nova tarefa ao final da lista.
//     Remover Tarefa: Remova uma tarefa da lista pelo índice.
//     Listar Tarefas: Liste todas as tarefas na ordem em que foram adicionadas.
//     Buscar Tarefa: Encontre uma tarefa na lista pelo seu nome e retorne o índice da tarefa, ou -1 se não encontrada.
//     Atualizar Tarefa: Atualize o nome de uma tarefa existente, dado o índice da tarefa.

// Instruções:

//     Defina uma função chamada manageTasks que recebe um array de tarefas e um comando. O comando deve ser um objeto com as seguintes propriedades:
//         action: Ação a ser executada ('add', 'remove', 'list', 'find', 'update').
//         task: Nome da tarefa (se aplicável).
//         index: Índice da tarefa (se aplicável).

//     A função deve realizar a ação correspondente ao comando:
//         'add': Adiciona a tarefa ao final do array.
//         'remove': Remove a tarefa do array pelo índice.
//         'list': Retorna uma string com todas as tarefas, cada uma em uma nova linha.
//         'find': Retorna o índice da tarefa se encontrada, ou -1 se não encontrada.
//         'update': Atualiza o nome da tarefa no índice fornecido.

let toDoList = ['Learn English', 'Learn JavaScript', 'Test task']

const taskToAdd = "Learn how to play guitar"
const indexToRemove = 2

function manageTasks(command){
    command.action = command.action.toLowerCase();

    switch (command.action) {
        case 'add': 
            AddNewTask(command.task)
            break
        case 'remove': 
            RemoveTask(command.task)
            break
        case 'find': 
            FindTask(command.task)
            break
        case 'list': 
            ListTasks()
            break
        case 'update': 
            UpdateTask(command.index, command.task)
            break
        default:
            console.log('Command not found')
    }
}

function AddNewTask(taskName){
    toDoList.push(taskName)
}

function RemoveTask(index){
    toDoList.splice(index, 1)
}

function FindTask(task){
    console.log(`Index of task '${task}': ${toDoList.indexOf(task)}`)
}

function UpdateTask(index, task){
    toDoList[index] = task
}

function ListTasks(){
    console.log()
    console.log('All tasks')
    toDoList.forEach(element => {
        console.log(`Task name: ${element}`)
    })
}

manageTasks({action: 'Add', task: taskToAdd})
manageTasks({action: 'Remove', index: indexToRemove})
manageTasks({action: 'Find', task: 'Learn English'})
manageTasks({action: 'Update', index: 0, task: 'Learn English Better'})
manageTasks({action: 'List'})