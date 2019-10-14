import React, { Component } from 'react';
import ResultsList from './results.view.js';
import SearchHeader from './app.header.js';
import AppFooter from './app.footer.js';
import { Segment } from 'semantic-ui-react'

class AppHome extends Component {
    state = {active: false, searchData: ''};

    onSearch = (searchQuery) => {
        this.setState({searchData: searchQuery});
    };

    render() {
        return (
            <div>
                <SearchHeader triggerSearch={this.onSearch}/>
                <Segment style={{margin: '5.6em 3em 6em'}}>
                    <ResultsList searchData={this.state.searchData}></ResultsList>
                </Segment>
                <AppFooter/>
            </div>
        )
    }
}

export default AppHome;
