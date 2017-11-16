import React, { Component } from 'react';
import {
    Button,
    Icon,
    Image,
    Header,
    Modal
} from 'semantic-ui-react'

 class ResultDetails extends Component {

    constructor(props) {
        super(props);
        this.state = { data : this.props.resultData};

        console.log(this.state);
    }



    render() {
        return (
            <Modal trigger={<Button basic color='green'> <Icon name='plus' /> View Details</Button>}>
                <Modal.Header>{this.state.data.name}</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default ResultDetails