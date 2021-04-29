import React, { Component } from 'react';
import './App.css';
import './timeline.css';
import 'font-awesome/css/font-awesome.css';
import moment from 'moment';

class AnxietyItem extends Component {

    render() {
        const {anxiety} = this.props; 

        return ( 
                <div className="item">
                <div className={'avatar'}>
                <img
                  alt='avatar'
                  src={anxiety.actor.avatar_url} />
                </div>

                <span className={'time'}>
                  {moment(anxiety.created_at).fromNow()}
                </span>

                <p>{anxiety.actor.display_login} {anxiety.payload.action}</p>
                <div className={'right'}>
                  {anxiety.repo.name}
                </div>
                </div>  
               );
    }
}

export default AnxietyItem;
