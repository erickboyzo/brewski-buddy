import React, { Component } from 'react';
import AppLoader from './app.loader.js';
import ResultDetails from './result.details.js';
import './results.view.css';
import { Card, Container, Header, Icon } from 'semantic-ui-react'
import axios from 'axios';

class ResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: null,
            loading: false,
            noData: 'No data found.'
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
                <Card raised={true}>
                    <Card.Content>
                        <Card.Header> {item.nameDisplay}
                        </Card.Header>
                        <Card.Meta>
                            <span> ABV:
                        </span>
                            <span> <bold>{item.abv ? `${item.abv} %` : this.state.noData}</bold> </span>
                        </Card.Meta>
                        <Card.Description>
                            <div className="content-labels"> Style:
                            </div>
                            <p>{item.style ? item.style.category.name : this.state.noData}</p>

                            <div className="content-labels"> Available:
                            </div>
                            <p>{item.available ? item.available.description : this.state.noData}</p>

                            <div className="content-labels"> Description:
                            </div>
                            <p> {item.description ? item.description : this.state.noData} </p>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <ResultDetails resultData={item}/>
                    </Card.Content>
                </Card>
            ));
        } else return <Container text textAlign='center'>
            <Header as='h1' icon>
                <Icon name='frown'/> No Search Results
                <Header.Subheader>C'mon now, you can do better than that!!
                </Header.Subheader>
            </Header>
        </Container>;
    }

    getQueryResults(name, type = 'beer') {
        this.setState({
            loading: true
        });
        axios.get(`/.netlify/functions/search`, {params: {q: name, type, callback: 'JSON_CALLBACK'}})
            .then(response => {
                this.setState({
                    results: response.data.data,
                    loading: false
                });
            }, error => {
                this.setState({
                    loading: false
                });
            })
            .catch((error) => this.setState({
                loading: false
            }));
    }

    render() {
        let results = this.renderResults(this.state.results);
        const {
            loading
        } = this.state;
        return (
            <div>
                {loading ? <AppLoader/> : null}
                <Card.Group> {results}
                </Card.Group>
            </div>
        );
    }
}

export default ResultsView