import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './timeline.css';
import Header from './Header.js';
import Content from './Content.js';
import Clock from './Clock.js';
import Footer from './Footer.js';

const  anxieties = [
{
    timestamp: "now",
    text: "ate lunch",
    user: {
        id: 1,
        name: 'Kat',
        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [
        {from: 'Kat', text: 'whaddup' }
    ]
}
];

const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
                      .then(json => json.slice(0, 4))

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {refreshing: false}
    }

    refresh() {
        this.setState({refreshing: true});
    }

    onComponentRefresh() {
        this.setState({refreshing: false});
    }
  
    render() {
    const {refreshing} = this.state;
        
    return (
        <div className="notificationsFrame">
            <div className="panel">
              <Clock />
              <Header title="Anxieties"/>
              <Content 
                onComponentRefresh={this.onComponentRefresh.bind(this)}
                requestRefresh={refreshing}
                fetchData={fetchEvents}/>
              <Footer>
                <button onClick={this.refresh.bind(this)}>
                    <i className="fa fa-refresh" />
                    Refresh
                </button>
              </Footer>
            </div>
        </div>
    );
  }
}

export default App;
