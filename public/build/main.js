//TODO globals are bad create class using function
var items = ['magic wand', 'potato', 'treasure chest', 'magic carpet', 'sentient small german car'];

//TODO bah! saving state! try bacon to get rid of this
var current_item = items[0];

var ImpossibleStore = React.createClass({displayName: "ImpossibleStore",
    getInitialState: function () {
        return {current_item: current_item};
    },
    next_click: function () {
    },
    render: function () {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Impossible Store"), 
                React.createElement("p", null, "previous"), 
                React.createElement("p", null, this.props.item_name), 
                React.createElement("p", null, "next")
            )
        );
    }
});

React.render(
    React.createElement(ImpossibleStore, {item_name: 'magic wand'}),
    document.getElementById('impossiblestore')
);
