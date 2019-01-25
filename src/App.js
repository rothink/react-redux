import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.handleClickBtn = this.handleClickBtn.bind(this)
    }

    componentWillMount() {
        this.setState({
            msg: ''
        })
    }

    handleClickBtn() {
        this.setState({
            msg: 'Hello Word'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickBtn}> click to hello</button>
                <p>{this.state.msg}</p>
            </div>
        );
    }
}

export default App;
