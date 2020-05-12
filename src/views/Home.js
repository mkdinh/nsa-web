import React, { Component } from 'react';

export default class Home extends Component {
    componentDidMount() {
        const { didRender } = this.props;
        didRender();
    }
    
    render() {
        return "hello"
    }
}