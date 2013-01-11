
widget = (function(){
    var _args = {};

    return {
        hasConfig: function(){
            console.log("has config called");
            $.ajax({
                url: "/config/widget_" + _args,
                cache: false
            }).done(function( html ) {
                console.log("result: " + html);
            });
        },
        getConfig: function(){
            console.log("get conf!");
        },
        init: function(args){
            _args = args;
            console.log('got init: ' + args);
            var widget_id = _args
            var widget = document.getElementById(widget_id);
            widget.innerHTML = "<h4>Graph: " + widget_id + "</h4>";
            var image = document.createElement('img');
            image.style.margin = "10px";
            image.src = "/graph_widget/graph.png";
            widget.appendChild(image);

            if(this.hasConfig()){
                var config = this.getConfig();
            }
            
            var key_input = document.createElement('input');
            key_input.type = "text";
            widget.appendChild(key_input);
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

widgets.push(widget);

