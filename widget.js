
widget = (function(){
    var _args = {};

    return {
        getConfig: function(callback) {
            console.log("has config called");
            $.ajax({
                url: "/config/widget_" + _args,
                cache: false
            }).done(function(json_config) {
                if(json_config === ""){
                    console.log("got empty result for widget: " + _args);
                }
                console.log("result: " + json_config);
                callback(json_config);
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

            var callback = function (json_config) {
                if(json_config === ""){
                    var key_input = document.createElement('input');
                    key_input.type = "text";
                    key_input.style.margin = "10px";
                    widget.appendChild(key_input);

                    var save_link = document.createElement('a');
                    save_link.href = "/setup/save_config?id=" + widget_id
                    save_link.innerHTML = "save";
                    widget.appendChild(save_link);
                }
            };

            this.getConfig(callback);
            
        },
        render: function() {
            alert("I got these! " + _args[0]);
        }
    };
}());

widgets.push(widget);

