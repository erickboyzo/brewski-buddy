import React, { Component } from 'react';

export default class AppLoader extends Component {
   
    render() {
        return (
            <div className='ui page active dimmer'>
                    <div className="content">
                    <div className="ui text loader">Loading...</div>
                    </div>
                </div>
        );
    }
}

