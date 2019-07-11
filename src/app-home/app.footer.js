import React, { Component } from 'react';
import {
    Container,
    Image,
    Segment,
} from 'semantic-ui-react'

class AppFooter extends Component {

    render() {
        return (
            <div className='footer'>
                <Segment
                    inverted
                    vertical
                    style={{ margin: '5em 0em 0em', padding: '0em 0em' }}>
                    <Container textAlign='center'>
                        <Image src='http://s3.amazonaws.com/brewerydb/Powered-By-BreweryDB.png' height='35' width='180' centered></Image>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default AppFooter;
