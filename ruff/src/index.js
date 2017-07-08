/**
 * Created by dustar on 2017/7/8.
 */
'use strict';

var fetch

var isScroll
var sen
var start
var end
var len
var x
var ws
var replyText



$.ready(function (error) {
    httpGet()
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
    isScroll=true;
    sen="abcdefghijklmnopqrstuvwxyz"
    start=0
    end=15
    len=26
    x=0

});

$.end(function () {
    $('#led').turnOff();
});


function ruffRefresh() {
    var date=(new Date()).toLocaleTimeString()

    $('#lcd').setCursor(0,0);
    $('#lcd').print(date);
    if(isScroll) {
        if (start === len) {
            $('#lcd').setCursor(15 - x, 1)
            $('#lcd').print(sen.substring(0, x))
            x++
            if (x === 15) {
                start = 0
                end = 15
            }
        }
        else {
            $('#lcd').setCursor(0, 1)
            $('#lcd').print(sen.substring(start, end))
            start++
            if (len > end)
                end++
            else {
                $('#lcd').setCursor(end - start - 1, 1)
                $('#lcd').print(" ")
            }
        }
    }
}


function displaySentence(sentence) {

    sen=sentence
    if ($('#lcd').length > 16) {
        isScroll = true
        len=$('#lcd').length
        end=15
    }
}

function httpGet(r) {
    var http = require('http');
    var url = require('url');
    var util = require('util');

    //req 请求信息   res返回信息
    http.createServer(function(req, res){
        res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'});  //状态码+响应头属性
        // 解析 url 参数
        var params = url.parse(req.url, true).query;  //parse将字符串转成对象,req.url="/?url=123&name=321"，true表示params是{url:"123",name:"321"}，false表示params是url=123&name=321
        res.write(replyText)
        replyText = ""
        res.end()
        var type = params.type
        var text = params.text
        var addition = params.add
        if (type !== "request") {

        }
    }).listen(3000);
}




