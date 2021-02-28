const todos = ['Order food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.push('Buy another coffee')
todos.pop()
todos.shift()
todos.unshift('add to start')

console.log(`You have ${todos.length} todos!`)
console.log(todos)

todos.forEach(function (todo, index) {
    console.log(`${todo} is at index ${index}`)
})

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i])
}

//searching array
console.log(todos.indexOf('Exercise'))
// searching list of objects

todos_list = [
    { title: 'todo 1', body: 'body of tofo 1' },
    { title: 'todo 2', body: 'body of tofo 2' },
    { title: 'todo 3', body: 'body of tofo 3' }
]

const list_index = todos_list.findIndex(function (todo, index){
    return todo.title === 'todo 2'
})

console.log(list_index)