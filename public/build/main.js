var ImpossibleStore = (function () {
    var items = ['magic wand', 'potato', 'treasure chest', 'magic carpet', 'small sentient german car'];

    //TODO bah! saving state! try bacon or flux to get rid of this
    var index = 0;

    return React.createClass({
        getInitialState: function () {
            return {current_item: items[index]};
        },
        previous_click: function (e) {
            e.preventDefault();
            index = index !== 0 ? index - 1 : index;
            this.setState({current_item: items[index]});
        },
        next_click: function (e) {
            e.preventDefault();
            index = index < (items.length - 1) ? index + 1 : index;
            this.setState({current_item: items[index]});
        },
        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement("h1", null, "Impossible Store"), 
                    React.createElement("p", null, this.state.current_item), 
                    React.createElement("p", null, 
                        React.createElement("a", {href: "", className: "previous", onClick: this.previous_click}, "previous"), 
                        React.createElement("a", {href: "", className: "next", onClick: this.next_click}, "next")
                    )
                )
            );
        }
    });
}());

React.render(React.createElement(ImpossibleStore, null), document.getElementById('impossiblestore'));
