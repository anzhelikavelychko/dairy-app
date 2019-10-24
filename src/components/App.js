import React from "react";
import InputComponent from "./InputComponent";
import ItemsListComponent from "./ItemsListComponent";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], status: "all"};
        this.updateItems = this.updateItems.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
    }
    updateItems (items) {
        this.setState({items: items});
    }
    updateStatus (status) {
        this.setState({status: status});
    }

    render () {
        return (
            <div className="todos">
                <InputComponent
                    items={this.state.items}
                    updateItems={this.updateItems}
                    updateAmountOfItems={this.updateAmountOfItems}
                />
                <ItemsListComponent
                    items={this.state.items}
                    updateItems={this.updateItems}
                    status={this.state.status}/>
            </div>
        );
    }
}