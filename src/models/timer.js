/**
 * Created by dustar on 2017/7/8.
 */

class Timer {
    static currentId
    constructor(title, interval) {
        this.type = "Timer"
        this.id = ++currentId
        this.title = title
        this.available = true
        this.createAt = new Date()
        this.remindAt = this.createAt + interval * 60
    }

    create() {

    }

    delete() {

    }

    remove() {

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
