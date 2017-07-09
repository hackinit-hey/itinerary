/**
 * Created by dustar on 2017/7/8.
 */

class Timer {
    constructor(title, interval) {
        this.type = "Timer"
        this.title = title
        this.available = true
        this.createAt = new Date()
        this.remindAt = this.createAt + interval * 60
    }

    create(title, interval) {
        //获取参数
        timer = new Timer(title, interval)
        this.refresh()
        tag = "timer"
    }

    delete() {
        timer = null
        this.refresh()
    }

    remind() {

    }

    //

    stop() {
        timer = null
    }

    delay() {
        remindAt += 10 * 60
        refresh()
    }

    refresh() {

    }
    polling() {
        let t = new Date()
        if(t === remindAt)
            this.reminder()
    }
}
