import React, { Component } from 'react';

export default class AppLoader extends Component {
   
    render() {
        return (
            <div class='ui page active dimmer'>
                    <div class="content">
                    <div class="ui text loader">Loading...</div>
                    </div>
                </div>
        );
    }
}

