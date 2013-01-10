
widget = (function(){
    var _args = {};

    return {
        init: function(args){
            _args = args;
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

document.getElementById('testing').innerHTML = "HELLO!";

widgets.push(widget);

console.log("widgets: " + widgets);

