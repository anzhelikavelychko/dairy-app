import React from "react";

export default class ListComponent extends React.Component{

    handleClearButton (index) {
        this.props.items.splice(index,1);
        this.props.updateItems(this.props.items);

    }
    handleCheckboxChange (index, event) {
        this.props.items[index].completed = event.currentTarget.checked;
        this.props.updateItems(this.props.items);
    }

    render () {
        const listItems = this.props.items.map((item, index) => {
            if (this.props.status === item.status) {
                return (
                    <li key={index}>
                        <input type="checkbox" checked={item.completed} onChange={this.handleCheckboxChange.bind(this, index)}/>
                        {item.text}
                        <button onClick={this.handleClearButton.bind(this, index)}>X</button>
                    </li>
                )
            }
        });
        return (
            <ul className="listItems">{listItems}</ul>

        );
    }
}