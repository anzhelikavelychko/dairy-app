import React from "react";


export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (event) {
        this.setState ({value: event.target.value});
    }
    handleSubmit (event) {
        event.preventDefault();
        this.props.items.push({text: this.state.value, completed: false, status: "all"});
        this.props.updateItems(this.props.items);
        this.setState({value: ""});
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
        );
    }
}