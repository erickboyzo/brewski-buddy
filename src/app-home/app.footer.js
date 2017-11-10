import React, { Component } from 'react';
import {
    Button,
    Card,
    Input,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

class AppFooter extends Component {

    render() {
        return (
            <div class='footer'>
                <Segment
                    inverted
                    vertical
                    style={{ margin: '5em 0em 0em', padding: '1em 0em' }}>
                    <Container textAlign='center'>
                        <Image src='http://s3.amazonaws.com/brewerydb/Powered-By-BreweryDB.png' height='50' width='190' centered></Image>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default AppFooter;
