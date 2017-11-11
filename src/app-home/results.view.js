import React, {Component} from 'react';
import AppLoader from './app.loader.js';
import {API_KEY} from './app.constants.js';
import './results.view.css';
import {
    Card,
    Container,
    Header,
    Icon
} from 'semantic-ui-react'


class ResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            loading: false
        };
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.searchData) !== JSON.stringify(nextProps.searchData)) // Check if it's a new user, you can also use some unique, like the ID
        {
            this.getQueryResults(nextProps.searchData);
        }
    }

    renderResults(results) {
        if (results) {
            return results.map((item, index) => (
                <Card raised='true'>
                    <Card.Content>
                        <Card.Header> {item.name}
                        </Card.Header>
                        <Card.Meta >
                        <span> abv:
                        </span>
                            <span> <bold>{item.abv ? `${item.abv} %` : 'No data found'}</bold > </span>
                        </Card.Meta >
                        <Card.Description>
                            <div class="content-labels"> Description:
                            </div>
                            {item.description ? item.description : 'No data'}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='plus'/>View more details
                        </a>
                    </Card.Content>
                </Card>
            ));
        } else return <Container text textAlign='center'>
            <Header as='h2' icon>
                <Icon name='frown'/> No Search Results
                <Header.Subheader>C'mon now, you can do better than that!!
                </Header.Subheader>
            </Header>
        </Container>;
    }

    getQueryResults(name) {
        this.setState({
            loading: true
        })
        fetch(`https://api.brewerydb.com/v2/search?q=${name}&type=beer&key=${API_KEY}&callback=JSON_CALLBACK`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    results: responseJson.data,
                    loading: false
                });
                return responseJson.results;
            })
            .catch((error) => {
                this.setState({
                    loading: false
                });
                console.error(error);
            });
    }

    render() {
        let results = this.renderResults(this.state.results);
        const {
            loading
        } = this.state
        return (
            <div>
                {loading ? <AppLoader /> : null}
                <Card.Group> {results}
                </Card.Group>
            </div>
        );
    }
}
export default ResultsView