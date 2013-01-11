
widget = (function(){
    var _args = {};

    return {
        getConfig: function(){
            console.log("has config called");
            $.ajax({
                url: "/config/widget_" + _args,
                cache: false
            }).done(function(json_config) {
                if(json_config === ""){
                    console.log("got empty result for widget: " + _args);
                }
                console.log("result: " + json_config);
                return json_config;
            });
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

            var json_config = this.getConfig();
            if(json_config === ""){
                var key_input = document.createElement('input');
                key_input.type = "text";
                key_input.style.margin = "10px";
                widget.appendChild(key_input);
            }
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

widgets.push(widget);

