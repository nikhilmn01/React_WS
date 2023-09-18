import classes from './Modal.module.css';
import  ReactDOM  from 'react-dom';
import { Fragment } from 'react';

export default function Modal(props) {
    const Backdrop = () => {
        return <div className={classes.backdrop} onClick={props.onHide}></div>
    }

    const ModalContent = () => {
        return <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    }

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, portalElement)}
        </Fragment>

    );
} 