import React, { Component } from 'react';
import { Button, Icon, Image, Modal } from 'semantic-ui-react'

class ResultDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {data: this.props.resultData, noData: 'No data found.'};
    }

    componentDidMount() {
    }

    render() {
        return (
            <Modal trigger={<Button basic color='green'><Icon name='plus'/> View Details</Button>} closeIcon>
                <Modal.Header>{this.state.data.name}</Modal.Header>
                <Modal.Content>
                    {this.state.data.labels ? <Image src={this.state.data.labels.medium} size='medium' rounded /> : null}

                    <div class="content-labels"> Style:
                    </div>
                    <p>{this.state.data.style ? this.state.data.style.category.name : this.state.noData}</p>

                    <div class="content-labels"> Available:
                    </div>
                    <p>{this.state.data.available ? this.state.data.available.description : this.state.noData}</p>

                    <div class="content-labels"> Description:
                    </div>
                    <p> {this.state.data.description ? this.state.data.description : this.state.noData} </p>

                    <div class="content-labels"> Food Parings:
                    </div>
                    <p> {this.state.data.foodPairings ? this.state.data.foodPairings : this.state.noData} </p>
                </Modal.Content>
            </Modal>
        );
    }
}

export default ResultDetails