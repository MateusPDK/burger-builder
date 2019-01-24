import React, {Component} from 'react';

import styles from './Modal.css';
import Aux from '../../../hoc/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />

                <div
                    className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'scale(1)' : 'scale(0)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;