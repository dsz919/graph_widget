
widget = (function(){
    var _args = {};

    return {
        init: function(args){
            _args = args;
            console.log('got init: ' + args);
            var widget_id = _args
            var widget = document.getElementById(widget_id);
            widget.innerHTML = "HI! I a graph widget!" + widget_id;
            var image = document.createElement('img');
            image.style.margin = "10px";
            image.src = "/graph_widget/graph.png";
            widget.appendChild(image);

            
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

widgets.push(widget);

