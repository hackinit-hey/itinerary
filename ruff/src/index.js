/**
 * Created by dustar on 2017/7/8.
 */
'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    $('#button1').on('push', function () {
        console.log('Button pushed.');
        $('#led').turnOn();
        ruffRefresh()
    });

    $('#button2').on('push', function () {
        console.log('Button2 pushed.');
        $('#led').turnOff();
    });


});

$.end(function () {
    $('#led').turnOff();
});


function ruffRefresh() {
    var date=(new Date()).toLocaleTimeString()
    $('#lcd').clear();
    $('#lcd').setCursor(0,0);
    $('#lcd').print(date);
}