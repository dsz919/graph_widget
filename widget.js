
widget = (function(){
    var _args = {};

    return {
        init: function(args){
            _args = args;
            console.log('got init: ' + args);
            var widget_id = _args
            document.getElementById(widget_id).innerHTML = "HI! I am widget!" + widget_id;
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

widgets.push(widget);

