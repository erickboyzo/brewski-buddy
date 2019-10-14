import React, { Component } from 'react';
import { Button, Container, Grid, Header, Icon, Input, Menu, Segment, Visibility, } from 'semantic-ui-react'

class SearchHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {searchValue: '', title: 'Brewski Buddy'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    hideFixedMenu = () => this.setState({visible: false})
    showFixedMenu = () => this.setState({visible: true})

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event) {
        this.props.triggerSearch(this.state.searchValue);
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (this.state.searchValue) {
                this.handleSubmit();
            }
        }
    }

    render() {
        const {visible} = this.state;
        return (
            <div>
                {visible ? <Menu fixed='top' size='large' color='inverted'>
                    <Menu.Item header='true' color='white'>
                        <Header as='h5' className='ui inverted header'>{this.state.title}</Header>
                    </Menu.Item>
                    <Menu.Item>
                        <Input size='tiny' value={this.state.searchValue} onKeyPress={this._handleKeyPress}
                               onChange={this.handleChange}
                               icon={<Icon name='search' inverted circular link onClick={this.handleSubmit}/>}
                               placeholder='Search...'/>
                    </Menu.Item>
                </Menu> : null}
                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{minHeight: 300, padding: '1em 0em'}}
                        vertical>
                        <Container text>
                            <Header as='h1'
                                    content={this.state.title}
                                    inverted
                                    style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '0em'}}
                            />
                            <Header
                                as='h2'
                                content='Trying a new beer? Not sure what it is? Fear no more, search and see what I find for you.'
                                inverted
                                style={{fontSize: '1.7em', fontWeight: 'normal'}}/>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Input placeholder='Search...' fluid={true} size='large'
                                               value={this.state.searchValue} onKeyPress={this._handleKeyPress}
                                               onChange={this.handleChange}/>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column width={16}>
                                        <Button primary size='huge' onClick={this.handleSubmit}>
                                            Search
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Segment>
                </Visibility>
            </div>
        );
    }
}

export default SearchHeader;
