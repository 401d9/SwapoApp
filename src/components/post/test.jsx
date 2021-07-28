import React from 'react';
import { render } from 'react-dom';
import "../../styling/main.scss";
var Modal = require('react-bootstrap-modal');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: true });
    }


    render() {
        let closeModal = () => this.setState({ open: false })

        let saveAndClose = () => {
            api.saveData()
                .then(() => this.setState({ open: false }))
        }

        return (
            <div>
                <button type='button' onClick={this.handleClick}>Launch modal</button>

                <Modal
                    show={this.state.open}
                    onHide={closeModal}
                    aria-labelledby="ModalHeader"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>A Title Goes here</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Some Content here</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Modal.Dismiss className='btn btn-default'>Cancel</Modal.Dismiss>

                        <button className='btn btn-primary' onClick={saveAndClose}>
                            Save
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}


render(<App />, document.getElementById('app'));