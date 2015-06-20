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
                <div>
                    <h1>Impossible Store</h1>
                    <p>{this.state.current_item}</p>
                    <p>
                        <a href="" className='previous' onClick={this.previous_click}>previous</a>
                        <a href="" className='next' onClick={this.next_click}>next</a>
                    </p>
                </div>
            );
        }
    });
}());

React.render(<ImpossibleStore/>, document.getElementById('impossiblestore'));
