var ImpossibleStore = (function () {
    var items = [
        {
            name: "Magic Wand",
            brand: "Merlin's Tree Branches",
            description: "For generations, Merlin's Tree Branches brand magic wands have been the standard of quality in the arcane arts. Used by apprentices and master sorcerers alike, an MTB (tm) wand will perform masterfully, in trained hands, in magical fields ranging from 0.001 mili-thaums up to 10.2 giga-thaums.",
            price: 1000
        },
        {
            name: "Potato",
            brand: "Potato Potato",
            description: "Potato. Potato potato potato. Potato potato potato potato potato potato potato. Potato potato potato. Potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato. Potato potato potato potato potato potato. Potato, potato. Cabbage.",
            price: 5000000000
        },
        {
            name: "Treasure Chest",
            brand: "Manic Mysteries",
            description: "Here at Manic Mysteries. We believe in adding a little spice to life. That's why we travel to the furthest reaches of The Multiverse to bring you the most unpredictable treasure chests in all of existence, non-existence, and quasi-existence. What's inside? Well, it could be riches beyond your wildest dreams, or it could be a monster more hideous than your worst nightmare. It could be full of boots, or belly button lint. Manic Mysteries makes no guarantees or promises about the contents of their treasure chests and is not liable for lost limbs, the contraction of strange diseases, or  accidental transcendence to a higher plane of existence.",
            price: 7777
        },
        {
            name: "Flying Carpet",
            brand: "Gentle Genie",
            description: "Gentle Genie brand Flying carpets are perfect for ",
            price: 81000
        },
        {
            name: "Sentient Small German Car",
            brand: "Dependable Deliveries",
            description: "Germany exists in multiple realities: earth, saturn, and nebular 4.",
            price: 10000
        }
    ];

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
                    <div>Item: {this.state.current_item.name}</div>
                    <div>Price: {this.state.current_item.price}</div>
                    <div>Brand: {this.state.current_item.brand}</div>
                    <div>Description:</div>
                    <div>{this.state.current_item.description}</div>
                    <div>
                        <a href="" className='previous' onClick={this.previous_click}>previous</a>
                        <a href="" className='next' onClick={this.next_click}>next</a>
                    </div>
                </div>
            );
        }
    });
}());

React.render(<ImpossibleStore/>, document.getElementById('impossiblestore'));
