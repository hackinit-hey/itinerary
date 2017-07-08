/**
 * Created by dustar on 2017/7/8.
 */

/**
 * Created by dustar on 2017/7/8.
 */

class Todo {
    static currentId
    constructor(title) {
        this.type = "Todo"
        this.id = ++currentId
        this.title = title
        this.available = true
        this.createAt = new Date()
    }

    create() {

    }

    delete() {

    }

    //

    stop() {


    }

    output() {

    }
}

class TodosQueue {
    items = []

    count () {
        return items.length
    }

    switch () {

    }
}
