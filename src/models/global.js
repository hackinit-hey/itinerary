/**
 * Created by dustar on 2017/7/8.
 */

var calenders = new CalendersQueue()
var todos = new TodosQueue()
var timer = null

function postToServer(type, text, add, add2) {
    jQuery.ajax({
        url: "https://192.168.78.1:3000/?" + jQuery.param({
            "type": type,
            "text": text,
            "add": add,
            "add2": add2,
        }),
        type: "POST",
    })
        .done(function(data, textStatus, jqXHR) {
            return data
        })
        .fail(function(jqXHR, textStatus, errorThrown) {
            return null
        })
        .always(function() {
            return null
        });
}

var tag = null;

