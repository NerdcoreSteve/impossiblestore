//TODO globals are bad create class using function
var items = ['magic wand', 'potato', 'treasure chest', 'magic carpet', 'sentient small german car'];

//TODO bah! saving state! try bacon to get rid of this
var current_item = items[0];

var ImpossibleStore = React.createClass({
    getInitialState: function () {
        return {current_item: current_item};
    },
    next_click: function () {
    },
    render: function () {
        return (
            <div>
                <h1>Impossible Store</h1>
                <p>previous</p>
                <p>{this.props.item_name}</p>
                <p>next</p>
            </div>
        );
    }
});

React.render(
    <ImpossibleStore item_name={'magic wand'}/>,
    document.getElementById('impossiblestore')
);
