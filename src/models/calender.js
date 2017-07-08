/**
 * Created by dustar on 2017/7/8.
 */

/**
 * Created by dustar on 2017/7/8.
 */

class Calender {
    static currentId
    constructor(title, deadline, remindAhead = 20) {
        this.type = "Calender"
        this.id = ++currentId
        this.title = title
        this.available = true
        this.createAt = new Date()
        this.deadline = deadline
        this.remindAt = deadline  - remindAhead * 60
    }

    create() {

    }

    delete() {

    }

    remind() {

    }

    //

    stop() {

    }

    delay() {

    }

    output() {

    }
}

class CalendersQueue {
    items = []
}
