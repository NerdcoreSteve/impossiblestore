var React = require('react');

var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var ButtonGroup = Bootstrap.ButtonGroup;
var Panel = Bootstrap.Panel;
var PageHeader = Bootstrap.PageHeader;

//http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
var money_formatter = (number) => {
    return "KU " + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};

var Item = React.createClass({
    styles: {
        container: {
            'width': '80%',
            'height': '300px',
            'margin': 'auto',
            'margin-top': '10px',
            'margin-bottom': '10px',
            'padding': '10px',
            'background': '#72a747' 
        },
        image: {
            'width': '150px',
            'margin-left': '30px',
            'margin-top': '30px'
        },
        inner_span: {
            'width': '900px',
            'float': 'right'
        },
        description: {
            'height': '150px'
        }
    },
    render: function() {
        return (
            <div style={this.styles.container}>
                <img style={this.styles.image} src={this.props.item.image}></img>
                <span style={this.styles.inner_span}>
                    <div>{this.props.item.name} by {this.props.item.brand}</div>
                    <div style={this.styles.description}>{this.props.item.description}</div>
                    <Button>Buy for {money_formatter(this.props.item.price)}</Button>
                </span>
            </div>
        );
    }
});

var ItemList = React.createClass({
    render: function () {
        return (
            <div>
                {() => {return this.props.items.map((item) => {return <Item item={item}></Item>});}()}
            </div>
        );
    }
})

var ImpossibleStore = (function () {
    var items = [
        {
            name: "Magic Wand",
            brand: "Merlin's Tree Branches",
            description: "For generations, Merlin's Tree Branches brand magic wands have been the standard of quality in the arcane arts. Used by apprentices and master sorcerers alike, an MTB (tm) wand will perform masterfully, in trained hands, in magical fields ranging from 0.001 mili-thaums up to 10.2 giga-thaums.",
            price: 1000,
            image: 'images/wand.png'
        },
        {
            name: "Potato",
            brand: "Potato Potato",
            description: "Potato. Potato potato potato. Potato potato potato potato potato potato potato. Potato potato potato. Potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato potato. Potato potato potato potato potato potato. Potato, potato. Cabbage.",
            price: 5000000000,
            image: 'images/potato.png'
        },
        {
            name: "Treasure Chest",
            brand: "Manic Mysteries",
            description: "Here at Manic Mysteries. We believe in adding a little spice to life. That's why we travel to the furthest reaches of The Multiverse to bring you the most unpredictable treasure chests in all of existence, non-existence, and quasi-existence. What's inside? Well, it could be riches beyond your wildest dreams, or it could be a monster more hideous than your worst nightmare. It could be full of boots, or belly button lint. Manic Mysteries makes no guarantees or promises about the contents of their treasure chests and is not liable for lost limbs, the contraction of strange diseases, or  accidental transcendence to a higher plane of existence.",
            price: 7777,
            image: 'images/treasure_chest.png'
        },
        {
            name: "Flying Carpet",
            brand: "Gentle Genie",
            description: "Gentle Genie brand Flying carpets are perfect for kids going on their first adventures or urban professionals tired of their congested commutes. With features like an onboard inertial dampening spell, seat belts, and a pouche of holding with a 3,000 cubic quantar capacity, Gentle Genie brand flying carpets have been rated the best in their class by Magical Vehicles Monthly for the last 5 years.",
            price: 81000,
            image: 'images/flying_carpet.png'
        },
        {
            name: "Sentient Small German Car",
            brand: "Dependable Deliveries",
            description: "The natural phenomena of small cars from Germany (a country that exists in many realities, most commonly on Earth, Saturn, and Nebular 4) coming to life and becoming the best friend of you and/or your children while also becoming the catalyst for an adventure or quest is well known in scientific circles. What is less well known is that there is a surplus of these magical cars yearning to be part of a family. At Dependable Deliveries we pride ourselves on finding the right magical car for you and/or your children. (Please note, you will not be purchasing the car itself as they are defined as people by the Lunar Accords, instead you will be purchasing the delivery of the car. What happens next is up to you and your new metal friend!)",
            price: 10000,
            image: 'images/small_sentient_german_car.png'
        }
    ];

    return React.createClass({
        render: function () {
            return (
                <div>
                    <PageHeader>Impossible Store</PageHeader>
                    <ItemList items={items}></ItemList>
                </div>
            );
        }
    });
}());

React.render(<ImpossibleStore/>, document.getElementById('impossiblestore'));
