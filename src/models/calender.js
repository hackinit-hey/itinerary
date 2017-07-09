/**
 * Created by dustar on 2017/7/8.
 */

/**
 * Created by dustar on 2017/7/8.
*/

class Calender {
    constructor(title, deadline, remindAhead) {
        this.type = "Calender"
        this.title = title
        this.available = true
        this.createAt = new Date()
        this.deadline = deadline
        this.remindAt = deadline  - remindAhead * 60
}

    static create(title, deadline, remindAhead = 20) {
        //获取参数并加入构造器
        let calender = new Calender(title, deadline, remindAhead)
        calenders.items.push(calender)
        calenders.items.sort((a,b)=>{return a.remindAt < b.remindAt})
    }

    remind() {

    }

    //

    static stop() {
        calenders.items.split(0, 1)
        this.refresh()
    }

    static delay() {
        this.remindAt += 10*60
        calenders.items.sort((a,b)=>{return a.remindAt < b.remindAt})
        this.refresh()
    }

    refresh() {

    }

    polling() {
        let t = new Date()
        if(t === calenders.items[0].remindAt)
            this.reminder()
    }
}

class CalendersQueue {
    constructor() {
        this.items = []
    }
    delete(pos) {
        //获取位置
        this.items.split(pos, 1)
    }
}

// Request (7) (POST https://192.168.78.1:3000/)

