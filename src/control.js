

$(document).ready(function() {
    setInterval(refresh, 1000)
})

function refresh() {
}

function newTodo() {
    "use strict";
    let title = $('#newTodoName').val()
    Todo.create(title)
}

