import React, { Component } from 'react';
import AnxietyItem from './AnxietyItem.js'
import './App.css';
import './timeline.css';
import 'font-awesome/css/font-awesome.css';

const data = require('./data.json').slice(0, 4)

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            anxieties: []
        }
    }

    componentDidMount(data) {
        this.updateData();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.requestRefresh !== this.props.requestRefresh) {
            this.setState({loading: true}, this.updateData);
        }
    }

    updateData() {
        this.setState({
            loading: false,
             anxieties: data.sort(() => 0.5 - Math.random()).slice(0, 4)
        }, this.props.onComponentRefresh);
    }

    render() {
    const {loading, anxieties} = this.state;
    
    return (
      <div className="content">
        <div className="line"></div>
        {loading && <div>Loading</div>}
        {anxieties.map((anxiety) => (
            <AnxietyItem
                anxiety={anxiety} />
        ))}
      </div>
    );
  }
}

export default Content;
