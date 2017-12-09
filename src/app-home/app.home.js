import React, { Component } from 'react';
import ResultsList from './results.view.js';
import SearchHeader from './app.header.js';
import AppFooter from './app.footer.js';
import {
    Segment
} from 'semantic-ui-react'

class AppHome extends Component {

    state = { active: false, searchData: '' };


    myCallback = (dataFromChild) => {
        this.setState({ searchData: dataFromChild });
    };

    render() {
        return (
            <div>
                <SearchHeader callbackFromParent={this.myCallback}/>
                <Segment style={{ margin: '5.6em 3em 6em'}}>
                    <ResultsList searchData={this.state.searchData}></ResultsList>
                </Segment>
                <AppFooter/>
            </div>
        )
    }
}

export default AppHome;
