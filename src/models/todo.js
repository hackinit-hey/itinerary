/**
 * Created by dustar on 2017/7/8.
 */

/**
 * Created by dustar on 2017/7/8.
 */

class Todo {
    constructor(title) {
        this.type = "Todo"
        this.title = title
        this.available = true
        this.createAt = new Date()
    }

    static create() {
        //获取参数并加入构造器
        let todo = new Todo()
        todos.items.add(todo)
    }

    static change() {
        let temp = todos.items[0]
        todos.items.split(0, 1)
        todos.add(temp)
        postToServer("todo", temp, todos.items.length + " TODO", "")
    }



    //

    static stop() {
        todos.items.split(todos.items.length - 1, 1)
        this.refresh()
    }

    output() {

    }

    refresh() {

    }
}

class TodosQueue {
    constructor() {
        this.items = []
    }

    count () {
        return this.items.length
    }

    switch () {

    }

    delete(pos) {
        todos.items.split(pos, 1)
        this.refresh()
    }
}
